export {}
// 왜 사용하는가?
// 이렇게 세가지 type이 있을 경우 Video에 description라는 프로퍼티가 추가되면 나머지 두 타입도 다 추가해줘야 된다.

type Video = {
    title: string;
    author: string;
    description: string;
};

type Animal = {
    name: string;
    age: number;
}

// mapped type은 js의 map과 비슷한 역할을 한다.
// [1,2].map(item => item * item); // [1, 4]
type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
}

type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P]; // 한번 값을 정한 뒤로는 더 이상 바꿀 수 없다.
}

// 재사용성이 매우 좋다.
type VideoOptional = Optional<Video>;
type AnimalOptional = Optional<Animal>;

// 사용 해보기
let videoOp: VideoOptional;
const value = {title: '123', created: '2020-02-03'};
videoOp = value;

// type VideoOptional = {
//     title?: string;
//     author?: string;
// };

// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// };


