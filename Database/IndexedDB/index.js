// IndexedDB

// NOTE: 장점
// 1. 여러키 유형별로 거의 모든 종류의 값을 저장할 수 있다.
// 2. 신뢰성을 위해 transaction을 지원한다.
// 3. key range queries와 indexs를 지원한다.
// 4. 로컬 스토리지보다 훨씬 더 많은 양의 데이터를 저장한다.

// NOTE: 데이터는 일반적으로 브라우저 설정, 확장 프로그램등과 함께 유저의 홈 디렉토리에 저장된다. 브라우저, OS마다 독립적인 저장소를 가지고 있다.

const version = 2 // NOTE: 계속 access 시도를 할 필요는 없으므로 필요할때 version을 바꿔서 재접근을 하게 됩니다.

// NOTE: 데이터베이스 삭제
// indexedDB.deleteDatabase('store')

// NOTE: 데이터베이스 오픈
let openRequest = indexedDB.open('store', version)

// NOTE: 1. 데이터베이스가 없을 경우 트리거
// NOTE: 2. 데이터베이스 버전이 변경되었을 경우 트리거
openRequest.onupgradeneeded = function(event) {
  let db = openRequest.result;
  const books = db.createObjectStore('test1', {keyPath: 'id'})

  // NOTE: index
  // 1. upgradeneeded에서만 수행
  // 2. 인덱스는 price필드를 추적
  // 3. 가격이 유일하진 않기때문에 unique 옵션 X
  const index = books.createIndex('price_idx', 'price')


  switch(event.oldVersion) {
    case 0: 
      // NOTE: 0이라는 뜻은 아직 데이터베이스가 없다는 뜻이다. 초기화 할 때 이 로직이 실행된다.
      console.log(event.oldVersion, 0)

      // NOTE: Object store
      // 1. indexedDB에서 가장 중요한 개념이며 데이터를 저장할 때 사용
      // 2. 동기로 동작
      // 3. 안에 key, value로 이루어진 값이 들어가야 됨
      // 4. key값은 유일해야 함
      // 5. onupgradeneeded 핸들러에서만 생성/수정이 가능
      
      // NOTE: 매개변수로 name, keyOptions가 들어가게 되는데 keyOptions같은 경우 아래 속성 둘중에 하나를 사용한다.
      // NOTE: autoIncrement: true를 하게 되면 자동으로 키생성이 되고, keyPath로할 경우 내가 정해준 속성을 key로 사용한다.
      break
    case 1: 
      // NOTE: 버전1 -> 버전 2로 변경 시 사용합니다.
      console.log(event.oldVersion, 1)
      break
    case 2: 
      // NOTE: 버전1 -> 버전 2로 변경 시 사용합니다.
      console.log(event.oldVersion, 2)
      break
    default: 
      console.log(event.oldVersion)
  }  
}

openRequest.onerror = function() {
  console.error("Error", openRequest.error)
}


openRequest.onsuccess = function(){
  const db = openRequest.result // NOTE: IDBDatabase

  // NOTE: 최신 버전 업데이트 이후 2번 탭에 들어갈 시 2번탭은 최신인데 1번탭은 최신이 아니게 된다. 그걸 방지해주는 이벤트
  db.onversionchange = function() {
    db.close(); // NOTE: 이전 연결 닫음
    alert("Database is outdated, please reload the page.")
  }

  // NOTE: transaction
  // 1. object store에 데이터를 저장할 때 사용된다.
  // 2. 두번째 인자로 'readwrite', 'readonly'를 사용할 수 있다.
  // 3. transaction이란 중간에 뭔가 잘못되면 전부 실패되야되며 성공하면 모두 성공해야 되는 의미를 가진다 
  // 4. IDBTransaction

  // NOTE: 트랜젝션을 생성하고 엑세스할 object store를 설정한다.
  const transaction = db.transaction('test1', 'readwrite')

  // NOTE: 작업할 object store를 얻어온다
  const test1 = transaction.objectStore('test1')
  const priceIndex = test1.index('price_idx')

  const request2 = priceIndex.getAll(10); // NOTE: price_idx값이 10인 아이들 배열로 result에 담음. IDBKeyRange로 범위 설정도 가능
  request2.onsuccess = function () {
    if (request2.result !== undefined) {
      console.log("Books", request2.result);
      // NOTE: 특정 값들 delete 하는법
      // const id = request.result;
      // const deleteRequest = test1.delete(id);

      //NOTE: 모두 delete 하는 법
      // test1.clear(); 
    } // array of books with price=10
    else console.log("No such books");
  }

  // NOTE: object store에 넣을 데이터
  const book = {
    id: 'js', // NOTE: 필수, keyPath가 이 속성을 key값으로 사용한다
    price: 10,
    created: new Date()
  }

  // NOTE: add, put을 사용할 수 있다.
  // NOTE: put은 keyPair, autoincrement가 없을 때 사용가능. 동일한 키값이 있는 경우 덮어 씌움
  // NOTE: add는 같은 키값을 가진 경우 ConstraintError라는 실패 에러를 반환.
  let request = test1.add(book);

  request.onsuccess = function() {
    console.log("Book added to the store", request.result); // NOTE: request.result는 key값을 의미(book.id)
  }

  
  request.onerror = function(event) {
    // NOTE: ConstraintError 에러는 같은 id일 경우 발생하는 오류
    if (request.error.name == "ConstraintError") {
      console.log("Book with such id already exists.");
      event.preventDefault(); // NOTE: 트랜잭션 중단을 막음
      event.stopPropagation(); // NOTE: db.onerror에 버블링 되는 것을 막아줌

      // NOTE: 다른 아이디로 넣음
      const book = {
        id: 'jsx',
        price: 10,
        created: new Date()
      }
      test1.add(book)
    } else {
      // do nothing
      // transaction will be aborted
      // we can take care of error in transaction.onabort
    }
  };

  // NOTE: 트랜잭션이 중지됐을때 실행되는 이벤트
  transaction.onabort = function(event) {
    console.log("Error", transaction.error, 'transaction'); // db에서 어차피 다 받을 수 있으므로 굳이 onabort를 쓸 필요는 없다.
  };

  // NOTE: 이벤트 위임
  // 1. indexed DB 이벤트 버블: request -> transaction -> database
  // 2. database에만 onerror를 해놓으면 모든 에러를 받을 수 있음
  db.onerror = function(event) {
    let request = event.target;
    console.log("Error", request.error, 'db');
  }
}




