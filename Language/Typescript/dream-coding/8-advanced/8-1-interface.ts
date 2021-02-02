export {}

type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// 같은 이름의 인터페이스를 정의하면 두 인터페이스를 합친 것을 구현해야 한다.
// type으로는 불가능하다.
interface PositionInterface { 
    z: number;
}

// object ⭐️
const obj1: PositionType = {
    x: 1,
    y: 1,
}

// z가 없으면 오류남
const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
}

// class ⭐️
class Pos1 implements PositionType {
    x: number;
    y: number;
}

// z가 없으면 오류남
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends(확장)
interface ZPositionInterface extends PositionInterface {
    z: number; // 확장
}

type ZPositionType = PositionType & { z: number }; // intersection(교차) 타입을 이용해서 묶을(확장) 수 있음

// 😄 only interfaces can be merged.
// 인터페이스만 가능
// interface PositionInterface { // OK
//     w: number;
// }

// type PositionType { // error

// }

// 😄 Type aliases can use computed properties
// 타입만 가능
type Person = {
    name: string,
    age: number,
}

type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right'