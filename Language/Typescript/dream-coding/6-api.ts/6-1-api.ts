export {}
/**
 * command + click을 하게 되면 lib.es5.d.ts로 가게 된다.
 * vscode를 설치하면 알아서 ts가 깔리게 되고 이것들은 다운로드 된다.
 * ms에서 만든 정의로서 밑의 링크로 가면 github 코드를 볼 수 있다.
 * https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
 */
Array; 


/**
 * 오버로딩이란?
 * 메서드 이름은 하나만 주고 매개변수를 다르게 함으로서 메서드를 여러개를 만드는 것을 의미한다.
 * 예를 들어 concat이 있다.
 * concat(...items: ConcatArray<T>[]): T[];
 * concat(...items: (T | ConcatArray<T>)[]): T[];
 */

// push 사용해보기
 const a = ['1',1, true, [1,true]]
 a.push("hi",2)

// concat 사용해보기
const b = [1,'1', false]
b.concat([3,4,5],4,5,6) // concat(...items: (T | ConcatArray<T>)[]): T[];
b.concat([3,4,5]) // concat(...items: ConcatArray<T>[]): T[];


/**
 * every 사용해보기
 * predicate는 시연을 하는 무언가로 해석하면 된다.
 * every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
 * unknown이란 리턴되는 값이 무엇인지 알 수 없을 경우 적는다.
 * unknown이란 개발자에게 내부로직에서 타입을 좁혀서 지정해줘 라는 의미를 가진다. 
 * any와 다른점은 type assertion, type guard 등을 사용해서 타입을 지정해주고 사용해야 한다.
 */
 
type Student = {
    passed: boolean;
}

const students: Student[] = [{passed: true}, {passed: true}, {passed: false}];

students.every(student => student.passed); // 하나라도 false가 뜨면 종료 후 false 반환

/**
 * every 사용해보기2
 * every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
 * T는 이미 Animal이다
 * 결국 S extends T 는 Cat extends Animal을 의미한다. 
 * value가 Animal이면 value는 Cat이다. <- 타입 가드 함수를 사용해서 구별한다.
 * this is S[]는 현재 여기서 this는 Array<T>를 의미하며 Array<Animal>이 Cat[] 이라는 뜻이다.
 * 
 * T 타입을 상속하는 S(서브)타입을 사용할 수 있다.
 * value is S는 value가 S에 속하는지 보는 것이다. 즉 배열안에 있는 값이 S인지 보는 것
 * is라는 것은 type predicate(user-defined type guards) 이라고 한다.
 */

 class Animal {}
 class Cat extends Animal {
     isCat: boolean = true;
 }

 class Dog extends Animal {
     isDog: boolean = false;
 }

 const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
 function isCat(animal: Animal): animal is Cat {
     return (animal as Cat).isCat !== undefined;
 }

 console.log(animals.every<Cat>(isCat)) // false

 