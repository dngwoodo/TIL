export {}
// 내가 따로 정리하는 Index signature = Object[key]
// https://itmining.tistory.com/87 참고

// * 첫번째 경우
const obj = {
	toString() {
		return 'hello!'
	}
};
const foo = {};

foo[obj] = '1234'; // obj내부의 메서드가 실행되고 return값이 있으면 key값이 된다.
console.log(foo); // {hello!: "1234"}



// * 두번째 경우
const obj2 = { message: 'Hello'};
const foo2 = {};

foo2[obj2] = 'World';
console.log(foo2) // {[object Object]: "World"} <- 이런식으로 오브젝트는 string으로 변환되면 "[object Object]" 이렇게 된다.

// * 세번째 경우
// number 인덱싱을 위해 JavaScript VM은 최적화를 시도한다.
// 그래서 number는 그 자체로 유효한 객체 접근자가 된다.
const a = [1,2,3];
console.log(a[0]) // 1


// 이러한 첫번째, 두번째 경우의 자바스크립트 동작은 매우 별로기 때문에 typescript에서는 index signature 타입을 string과 number로 제한한다.
// indexable type
// let foo3:{ [index:string] : {message: string} } = {};
// let foo3:{ [index:number] : {message: string} } = {};