// NOTE: DB 열기
const version = 2 
let openRequest = indexedDB.open('store', version)

// NOTE: DB 초기화 할 때와 버전이 바뀔 때 실행
openRequest.onupgradeneeded = function(event) {
  let db = openRequest.result;
  const test1 = db.createObjectStore('test1', {keyPath: 'id'})
  test1.createIndex('price_idx', 'price')


  switch(event.oldVersion) {
    case 0: 
      console.log(event.oldVersion, 0)
      break
    case 1: 
      console.log(event.oldVersion, 1)
      break
    case 2: 
      console.log(event.oldVersion, 2)
      break
    default: 
      console.log(event.oldVersion)
  }  
}
openRequest.onsuccess = function(){
  const db = openRequest.result
  db.onversionchange = function() {
    db.close();
    alert("Database is outdated, please reload the page.")
  }

  const transaction = db.transaction('test1', 'readwrite')
  const test1 = transaction.objectStore('test1')
  const priceIndex = test1.index('price_idx')
  const request2 = priceIndex.getAll(10);

  request2.onsuccess = function () {
    if (request2.result !== undefined) console.log("Books", request2.result);
    else console.log("No such books");
  }

  const request = test1.add({
    id: 'js',
    price: 10,
    created: new Date()
  });

  request.onsuccess = function() {
    console.log("Book added to the store", request.result);
  }

  
  request.onerror = function(event) {
    if (request.error.name == "ConstraintError") {
      console.log("Book with such id already exists.");
      event.preventDefault();
      event.stopPropagation();

      const book = {
        id: 'jsx',
        price: 10,
        created: new Date()
      }
      test1.add(book)
    }
  };

  transaction.onabort = function(event) {
    console.log("Error", transaction.error, 'transaction');
  };

  db.onerror = function(event) {
    const request = event.target;
    console.log("Error", request.error, 'db');
  }
}

// NOTE: DB 열때 에러 났을 경우
openRequest.onerror = function() {
  console.error("Error", openRequest.error)
}