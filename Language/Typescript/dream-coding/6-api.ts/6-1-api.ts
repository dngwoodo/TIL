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

// every 사용해보기
// predicate는 시연을 하는 무언가로 해석하면 된다.
// every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// unknown이란 리턴되는 값이 무엇인지 알 수 없을 경우 적는다.
// unknown이란 개발자에게 내부로직에서 타입을 좁혀서 지정해줘 라는 의미를 가진다. 
// any와 다른점은 type assertion, type guard 등을 사용해서 타입을 지정해주고 사용해야 한다.
type Student = {
    passed: boolean;
}

const students: Student[] = [{passed: true}, {passed: true}, {passed: false}];
students.every(student => student.passed); // 하나라도 false가 뜨면 종료 후 false 반환