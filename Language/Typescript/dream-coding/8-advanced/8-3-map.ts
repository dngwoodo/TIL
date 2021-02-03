// 왜 사용하는가?
// 이렇게 세가지 type이 있을 경우 Video에 description라는 프로퍼티가 추가되면 나머지 두 타입도 다 추가해줘야 된다.

type Video = {
    title: string;
    author: string;
    description: string;
};

type VideoOptional = {
    title?: string;
    author?: string;
};

type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
};


