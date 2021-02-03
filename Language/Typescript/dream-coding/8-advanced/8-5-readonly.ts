export {}

// 유틸리티 타입 <- 많이 쓰이는 것들은 이미 ts 개발자들이 만들어 놓았다. 그것을 유틸리티 타입이라고 함.
type ToDo = {
    title: string;
    description: string;
}

function display(todo: Readonly<ToDo>) {
    todo.title = 'jaja' // 매개변수 값을 바꿀 수 없게 불변성을 유지하는 것이 좋으므로 Readonly 라는 유틸리티 타입을 사용한다.
}

// 유틸리티 타입중 Required라는 것이다.
// -? 라는 것은 절대적인 값을 의미한다. 옵셔널의 반대이다.
type Required<T> = {
    [P in keyof T]-?: T[P];
}