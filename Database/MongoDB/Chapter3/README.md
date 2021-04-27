## Chapter3 도큐먼트 생성, 갱신 삭제

- [3.1 도큐먼트 삽입](#3.1-도큐먼트-삽입)
- [3.2 도큐먼트 삭제](#3.2-도큐먼트-삭제)
- [3.3 도큐먼트 갱신](#3.3-도큐먼트-갱신)
- [추가](#추가)

#### 3.1 도큐먼트 삽입

```js
// NOTE: video 데이터베이스에 생성 및 접근
use video

// NOTE: video.movies 컬렉션에 한 도큐먼트 추가
// NOTE: "_id"는 넣어주지 않을 시 자동 생성
db.movies.insertOne({ "title": "Stand by ME" });

// NOTE: video.moives 컬렉션에 여러 도큐먼트 추가
// NOTE: 단일 컬렉션에 도큐먼트를 한번에 전송하면 도큐먼트 삽입이 매우 빨라짐
// NOTE: 하지만 한번에 넣을 수 있는 데이터 용량이 48MB로 크기 제한이 있음
db.movies.insertMany([{"title": "극한직업"}, {"title": "아이언맨"}]);

// NOTE: insertMany 두번째 인자로 oredered를 넣을 수 있고 true일 시 순서 그대로, false일 시 성능 개선을 위해 재배열을 함(true가 기본값)
// NOTE: _id값이 중복일 시 ordered가 true일 시 오류 나는 지점 전까지만, oredered false일 시 오류빼고 전부 삽입을 진행함
db.movies.insertMany([{"title": "어벤져스"}, {"title": "토르"}], {"ordered": false});

// NOTE: insert도 있지만 MongoDB 3.0 이전버전에서 사용되었기 때문에 insertOne, insertMany를 활용하자

// NOTE: 컬렉션에 도큐먼트들 확인
db.movies.find()
```

삽입 유효성 검사

- MongoDB는 삽입된 데이터에 최소한의 검사를 수행
- "\_id"값이 없으면 새로 추가
- 모든 도큐먼트는 16MB 제한(추후 커질 수 있음)
  - 나쁜 스키마 방지
  - 일관된 성능 보장
- object.bsonsize(doc)로 Binary JSON(BSON) byte크기 확인 가능
  ```js
  // NOTE: 78885byte = 0.078885MB
  Object.bsonsize(db.movies.find({"title": "아이언맨"}));
  >>> 78885
  ```

#### 3.2 도큐먼트 삭제

```js
// NOTE: 필터 값에 해당하는 가장 첫 번째 도큐먼트를 삭제
db.movies.deleteOne({ title: "아이언맨" });

// NOTE: 필터 값에 해당하는 모든 도큐먼트를 삭제
db.movies.deleteMany({ year: 1984 });

// NOTE: 해당 컬렉션의 모든 도큐먼트 삭제
db.movies.deleteMany({});

// NOTE: drop을 사용하면 deleteMany보다 좀 더 빠르게 지울 수 있음
db.movies.drop();

// NOTE: remove도 있지만 MongoDB 3.0 이전버전에서 사용되었기 때문에 deleteOne, deleteMany 활용하자
// NOTE: 한번 지워진 도큐먼트는 백업이외에 복구할 방법이 없다
```

#### 3.3 도큐먼트 갱신

- 전체 갱신

  ```js
  // 전체 갱신
  // https://docs.mongodb.com/manual/crud/ 기본 구조 참조
  // https://docs.mongodb.com/manual/tutorial/insert-documents/ cli 연습 사이트

  // NOTE: 도큐먼트 생성
  db.users.insertOne({ name: "joe", friends: 32, enemies: 2 });

  // NOTE: 변수로 따로 빼서 서브 도큐먼트에 데이터 넣기
  const joe = db.users.findOne({ name: "joe" });
  joe.relationships = { friends: joe.friends, enemies: joe.enemies };

  // NOTE: joe object값 변경
  joe.username = joe.name;
  delete joe.name;

  // NOTE: replaceOne을 이용하여 도큐먼트 변경
  db.users.replaceOne({ name: "joe" }, joe);
  db.findOne({ username: "joe" });

  // NOTE: 중복 도큐먼트를 찾은 경우엔 업데이트 하지 않음
  // NOTE: replaceOne에 필터를 할때는 "_id"값을 활용하는 것이 좋다
  ```

- 부분 갱신

```js
// 부분 갱신에는 갱신 연산자(update operator) 사용
// NOTE: 갱신 연산자란 키를 변경, 추가, 제거하고, 심지어 배열과 내장 도큐먼트를 조작하는 복잡한 갱신 연산을 지정하는 데 사용하는 특수키이다

// NOTE: $set 제한자(modifier)
// NOTE: 도큐먼트 필드 값 변경 및 생성 가능
// NOTE: 도큐먼트 필드 값의 데이터형 변경 가능
// NOTE: 서브 도큐먼트의 데이터도 변경 가능
db.users.insertOne({ name: "joe", sex: "male" });
db.users.updateOne({ name: "joe" }, { $set: { "favorite book": "없음" } }); // favorite book 키는 없으므로 추가 됨
db.users.updateOne({ name: "joe" }, { $set: { "favorite book": "진짜 없음" } }); // 필드 값 변경
db.users.updateOne(
  { name: "joe" },
  { $set: { "favorite book": ["없음", "진짜 없음"] } }
); // 필드 값 데이터형 변경

// NOTE: $unset 제한자(modifier)
// NOTE: 필드 값 제거
// NOTE: 1이라는 값은 그냥 몽고디비에서 json/bson 오브젝트를 구별하기 위해 사용된다. 아무 값이나 넣어줘도 된다
// https://stackoverflow.com/questions/7652990/what-does-1-mean-in-unset-field-1 참조
db.users.updateOne({ name: "joe" }, { $unset: { "favorite book": 1 } });

// NOTE: $inc 제한자(modifier)
// NOTE: 이미 존재하는 키의 값을 변경하거나 새 키를 생성하는 데 사용($set과 비슷)
// NOTE: $set과 다른 점은 $inc는 숫자를 증감하기 위해 사용
// NOTE: int, long, double, decimal 타입 값에만 사용가능
db.users.updateOne({ name: "joe" }, { $inc: { age: 1 } }); // age 필드 생성
db.users.updateOne({ name: "joe" }, { $inc: { age: 1 } }); // age값 1증가(age: 2)

// 배열 연산자(array operator) 시용
// NOTE: 배열에 데이터를 생성하고 추가 가능

// NOTE: $push 연산자
// NOTE: 배열이 없으면 만들어서 추가
// NOTE: 배열이 있으면 거기에 추가
// NOTE: $each, $slice, $sort와 같이 사용가능
db.users.insertOne({ name: "joe", sex: "male" });
db.users.updateOne(
  { name: "joe" },
  { $set: { "favorite book": ["진짜 없음", "없음"] } }
);
db.users.updateOne(
  { name: "joe" },
  { $push: { "favorite book": "진짜 진짜 진짜 없음" } }
); // 배열 값추가
// db.users.updateOne({ name: "joe" }, { $push: { "favorite book": [1, 2, 3] } }); // NOTE: 이렇게 넣으면 배열안에 배열이 들어감
db.users.updateOne(
  { name: "joe" },
  { $push: { "favorite book": { $each: [11, 12, 13] } } }
); // $each를 사용해서 각각의 값을 배열 안에 넣는다

db.users.updateOne(
  { name: "joe" },
  {
    $push: {
      "favorite book": {
        $each: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        $slice: -10,
      },
    },
  }
); // $slice를 사용해서 배열 갯수를 제한한다(양수면 앞에부터, 음수면 뒤에서부터 적용)

db.users.updateOne(
  { name: "joe" },
  {
    $push: {
      "favorite book": {
        $each: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        $slice: -10,
        $sort: 1,
      },
    },
  }
); // 오름차순 정렬 이후 앞에 부분은 삭제하고 뒤에 부분을 넣게 된다

// NOTE: $addToSet 연산자
// NOTE: 중복을 피해서 넣을 수 있다
db.users.updateOne(
  { name: "joe" },
  {
    $addToSet: {
      "favorite book": {
        $each: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
  }
); // 중복은 피해서 들어가게 된다

// NOTE: $pop 연산자
db.users.updateOne(
  { name: "joe" },
  {
    $pop: {
      // NOTE: 양수 일 시 배열의 마지막부터 요소를 제거
      // NOTE: 음수 일 시 처음부터 요소를 제거
      "favorite book": 1,
    },
  }
);

// NOTE: $pull 연산자
// NOTE: 조건에 맞는 모든 도큐먼트들을 삭제
db.users.updateOne(
  { name: "joe" },
  {
    $pull: {
      // NOTE: 조건에 맞는 도큐먼트를 제거(3이라는 값을 가진 도큐먼트를 삭제)
      "favorite book": 3,
    },
  }
);

// NOTE: 위치 연산자($)
// NOTE: 첫번째 인자로 찾은 값의 위치를 기억했다가 두번째 인자에서 사용가능
db.users.updateOne(
  { name: "joe" },
  {
    $inc: {
      "favorite book.0": 1, // NOTE: 0번째 인덱스의 배열 요소값을 1증가
    },
  }
);

db.users.updateOne(
  { "favorite book": 4 },
  {
    $set: {
      "favorite book.$": 10, // NOTE: 10으로 변경, "favorite book": 4라는 같은 값이 있다면 제일 첫번째 껏만 변경함
    },
  }
);

// NOTE: arrayFilter 연산자
// NOTE: elem이라는 식별자를 사용
// NOTE: 반대표가 5표 이상인 댓글을 숨겨보자(책 p83 페이지 예제 참조)
db.blog.updateOne(
  { post: "post_id" },
  { $set: { "comments.$[elem].hidden": true } }, // NOTE: 2. -5표 이하인 아이들의 요소에 hidden필드, true필드값 추가
  {
    arrayFilter: [{ "elem.votes": { $lte: -5 } }], // NOTE: 1. -5표 이하인 아이들을 찾음
  }
);
```

- 갱신 입력

```js

```

#### 추가

- 현재 CRUD API의 목표는 모든 CRUD 작업의 의미론을 드라이버와 셸 전체에 걸쳐 일관되고 명확하게 하는 일이다. 즉 예전에 사용된 API들 보단 MongoDB 3.2 버전 이후로 나온 CRUD API를 사용하는 것이 좋다
