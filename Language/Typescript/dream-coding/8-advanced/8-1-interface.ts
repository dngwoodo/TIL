type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// object ⭐️
const obj1: PositionType = {
    x: 1,
    y: 1,
}

const obj2: PositionInterface = {
    x: 1,
    y: 1,
}

// class ⭐️
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
}

// Extends(확장)
interface ZPositionInterface extends PositionInterface {
    z: number; // 확장
}

type ZPositionType = PositionType & { z: number }; // intersection(교차) 타입을 이용해서 묶을(확장) 수 있음

