### 헷갈리는 부분 정리

#### any vs unknown
```ts
// https://stackoverflow.com/questions/51439843/unknown-vs-any/51439876 참조
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // ok anything goes with any
vUnknown.method(); // not ok, we don't know anything about this variable
```
#### number[] vs Array<number>
```ts
function a(a: readonly number[]){}
function a(a: readonly Array<number>){} // error, 'readonly' type modifier is only permitted on array and tuple literal types
```
#### Union
```ts
type BaseDirection = "right"
type DiagonalDirection = "rightup"

let a : BaseDirection | DiagonalDirection;
a = "right"
a = "rightup"
```
```ts
type BaseDirection = ["right"]
type DiagonalDirection = ["rightup"]

let a : BaseDirection | DiagonalDirection;
a = ["right"]
a = ["rightup"]
```
```ts
type BaseDirection = {
  0: "right"
}
type DiagonalDirection = {
  0: "rightup"
}

let a : BaseDirection | DiagonalDirection; // 둘중에 하나만 됨. 두개 다 넣을 순 없음.
a = {
  0: "right"
}
a = {
  0: "rightup"
}
```
#### Intersection
```ts
type BaseDirection = "right"
type DiagonalDirection = "rightup"

let a : BaseDirection & DiagonalDirection; // 아무것도 할당 할 수 없다. a: never이랑 같음.
```
```ts
type BaseDirection = ["right"]
type DiagonalDirection = ["rightup"]

let a : BaseDirection & DiagonalDirection; // 아무것도 할당 할 수 없다. a: never이랑 같음.
```
```ts
type BaseDirection = {
  0: "right"
}
type DiagonalDirection = {
  0: "rightup"
}

let a : BaseDirection & DiagonalDirection; // 아무것도 할당 할 수 없다. a: never이랑 같음.
a = {
  0: "right"
}
a = {
  0: "rightup"
}
```
```ts
type BaseDirection = {
  0: "right"
}
type DiagonalDirection = {
  1: "rightup" // 옵셔널을 주면 a에 굳이 안넣어줘도 상관없다.
}

let a : BaseDirection & DiagonalDirection; // 무조건 2개 다 넣어야 된다.
a = {
  0: "right",
  1: "rightup"
}
```

#### Type Guard
- [x] typeof(javascript용)
- [x] instance of(Typescript용)
- [x] in(javascript용)
- [x] literal typeguard
- [x] null, undefined(strictNullChecks)
- [x] 사용자 정의 type guard function

```ts
// typeof
function doSomething(x: number | string) {
  if(typeof x === 'string') { // x를 string으로 인지함.
    console.log(x.substr(1)); // substr을 자동완성 할 수 있음.
  }
}
```
```ts
// instance of
class Student {
  name = 'dongwoo';
  age = 28;
}

class Worker {
  name = 'yugesh';
  job = 'developer';
}

function makeNewPerson(arg: Student | Worker) {
  if (arg instanceof Student) {
    // instanceof를 통해 Student라는 것을 알았으므로 
    console.log(arg.age) // age 사용가능
    console.log(arg.name) // name 사용가능
  }

  if(arg instanceof Worker) { // else로 써줘도 동작한다.
      console.log(arg.job)
      console.log(arg.name)
  }

  console.log(arg.name) // 공통 부분만 사용가능
}
```
```ts
// in
type A = {
  x: number;
}

type B = {
  y: string;
}

function AB(arg: A | B) {
  if('x' in arg) { // type이 A라는 소리
    console.log(typeof arg.x)
  } else {
    console.log(typeof arg.y)
  }
}
```
```ts
// literal typeguard
type Random = {
  kind: 'number',
  value: 3
};
type Random2 = {
  kind: 'string'
  stringValue: 'hi'
};

// 당연한거겠지만 &를 하게 되면 state: never이 된다. kind가 겹치기 때문
function radomFunc(state: Random | Random2){ 
  if(state.kind === 'number') {
    console.log(state.kind)
  }
  else if(state.kind === 'string') {
    console.log(state.stringValue)
  }
  console.log(state.kind)
}
```

```ts
// null, undefined(strictNullChecks)
// strictNullChecks를 true로 하면 null, undefined를 구별한다.
// strictNullChecks를 false로 하면 null, undefined를 구별하지 않는다.
// strict: true를 해주면 strict 관련 옵션들이 전부 true가 된다.
function a(a?: number | null) {
  if(a === null) return;
}

```
```ts
// 사용자정의 type guard function
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 사용자 정의 Type Guard
// arg는 any로 해줘야 된다. Foo | Bar, Foo & Bar 둘다 안됨
// arg is Foo를 쓰기 위해선 이렇게 따로 함수로 빼줘야 하고 리턴값이 필요하다.
// "어떤 인자명"은 "어떠한 타입이다"라는 값을 리턴하는 함수
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined; // return 값이 반드시 필요하다.
}

// 사용자 정의 Type Guard 사용 예시
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // Error!
  }
  else {
    console.log(arg.foo); // Error!
    console.log(arg.bar); // ㅇㅋ
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
```


#### Type Alias vs Interface
```ts
// 예제는 8-1 정리 참조

// type alias
// 1. literal type을 줄 수 있다.
// 2. &을 사용하면 extends와 같은 역할을 할 수 있다.
// 3. computed properties 사용가능

// interface
// 1. 같은 이름의 interface가 있으면 중첩이 된다.
// 2. extends를 이용하여 확장(상속)할 수 있다.
```

#### Index Signature
```ts
// [key: string]: any <- index signature라고 한다.
// key값은 string 또는 number만 가능하다.
// 만약 type alias나 interface에 넣는다면 key가 string일때는 index signature type을 무조건 따라야 한다.
// number일때는 상관없다.

interface A {
  [key: string]: string;
  name: string;
  age: string // number을 넣으면 에러가 난다.
}

interface B {
  [key: number]: string;
  name: string;
  age: number // string으로 넣어도 에러가 나지 않는다.
}
```

#### Mapped Types
```ts
// javascript의 map과 비슷하다.
type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  // Mapping Modifiers
  // readonly나 ?를 붙여 줄 수 있다.
  // Modifiers앞에 접두사로 +, -를 붙일 수 있다. default는 +로 modifiers를 허용한다는 의미이다.
  readonly [P in keyof T]+?: T[P]; // for...in <- 이것이 mapped type
}

type VideoOptional = Optional<Video>;

const a: VideoOptional = {
  title: 'omg',
  author: 'dongwoo'
}
```
```ts
type ExtraPII<Type> = {
  // Type[property]안에 { pill:true }가 있는지 확인하는 것(conditional types이다)
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false
}

type DBFields = {
  id: {format: "incrementing"};
  name: {type: string, pii: true};
}

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>; // { id: false, name: true }
```

#### Operator Types
```ts
// keyof operator type
type Point = { x: number, y:number };
type P = keyof Point // "x" or "y"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//   ^ = type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//   ^ = type M = string | number <- 이것은 javascript에서 key값은 항상 string이기 때문에 상관없어서이다.
```
```ts
// typeof operator type
// 이 아이는 typescript용 typeof이다. javascript와 헷갈리지 말자.
// type context에서 사용 가능한 아이임.
let s = "hello";
let n: typeof s; // type context에서 사용한다.

function a() {
  return { x:3, y:6 }
}

type A = typeof a // () => { x: number, y: number }
```
```ts
// indexed Access Types
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age" | "name"] // number | string
type Age2 = Person[keyof Person] // number | string | boolean <- keyof를 사용해서 union type("age" | "name" | "alive")으로 만듬
```
```ts
// Conditional Types
// SomeType extends OtherType ? TrueType : FalseType;
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
//   ^ = type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
//   ^ = type Example2 = string

// Template Literal Types
// 1
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
//   ^ = type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

// 2
type PropEventSource<Type> = {
    // 여기에 firstName, lastName, age가 들어간다. 그래서 첫번째 인자의 type은 firstNameChanged | lastNameChanged | ageChanged가 된다.
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

// Create a "watched object" with an 'on' method
// so that you can watch for changes to properties.
// 사용할 function에 type 생성
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

// 원래는 사용할 때 makeWatchedObject<{...}>({...}) 이렇게 해줘야 되지만 type infer로 인해 안해줘도 된다.
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

// const person: {
//     firstName: string;
//     lastName: string;
//     age: number;
// } & PropEventSource<{
//     firstName: string;
//     lastName: string;
//     age: number;
// }>

person.on("firstNameChanged", () => {});
person.firstName
person.lastName
person.age
```
#### Utility Types
```ts
// ReturnType을 직접 구현해보자
// generic 사용
// conditional type 사용
// infer 사용
type FunctionReturnType<T extends (...args:any) => any> = T extends (...args:any) => infer R ? R : any
type H = FunctionReturnType2<()=>{a:string, b: string}> // {a:string, b: string}
const mockFunc = () => ({a: 3, b:5})
// 여기서 알 수 있는 점은 type context에는 type만 들어갈 수 있다. mockFunc라는 값을 넣을 순 없다. 그래서 typeof사용
type G = FunctionReturnType<typeof mockFunc>
```

#### tsconfig.json
