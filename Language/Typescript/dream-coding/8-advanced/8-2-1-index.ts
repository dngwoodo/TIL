export {}

const obj = {
    name: 'dongwoo',
}

obj.name; // dongwoo
obj['name'] // dongwoo

type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

type Name = Animal['name']; // string
type Gender = Animal['gender'] // 'male' | 'female';
type Keys = keyof Animal; // "name" | "age" | "gender"

type Person = {
    name: string;
    gender: Animal['gender'];
};
const person: Person = {
    name: 'dongwoo',
    gender: 'male',
}

// 정리
// 인덱스 타입을 사용하면 다른 타입에 있는 키에 접근해서 키의 value 타입을 가져와 사용할 수 있다.
// 인덱스란 [] 를 통해 인덱싱하는 것을 의미한다.