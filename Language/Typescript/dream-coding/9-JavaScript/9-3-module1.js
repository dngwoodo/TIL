// export default를 하게 되면 갖다 쓰는 쪽에서 이름을 어느것으로 바꿔도 상관없다.
// 한 파일안에 한개만 존재 가능
export default function add(a, b) {
    return a + b;
}

// 나머지는 export 사용
export function fakeFunc() {
    console.log('fakeFunc');
}
