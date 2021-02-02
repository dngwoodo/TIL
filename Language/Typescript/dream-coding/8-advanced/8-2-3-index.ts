export {}

// * 모든 멤버는 string index signature([key: string])를 따라야 한다.
// 즉 [key: string]의 value 타입을 전부 따라야 된다.
// 모든 문자열 엑세스가 동일한 결과를 제공하도록 안전을 제공하기 위한 것이다.
interface Foo {
    [key: string]: number;
    x: number;
    y: number;
}

interface Bar {
    [key: string]: number;
    x: number;
    y: string; // error, [key: string]: number | string을 해주면 에러 안남.
}

// number index signature([key: number])은 굳이 따를 필요 없다.
interface Bar2 {
    [key: number]: number;
    x: number;
    y: string; // ok
}


// * 제한된 문자열 세트 사용
type index = 'a' | 'b' | 'c';
type FromIndex = { [key in index]?: number } // a,b,c 모두 있어야 되는 것은 아니다.

const good: FromIndex = {a:3, b:1}
const good2: FromIndex = {a:3, b:1, c:4}
const good3: FromIndex = {a:3, b:1, c:4, d:6} // error

// * 중첩된 index signature
interface NestedCss {
    [selector: string]: string | NestedCss | undefined;
    color?: string;
}

const aaaa: NestedCss = {
    colsor: 'red' // 오타인데 에러가 안남, [selector: string] 때문임.
}

interface NestedCss {
    color?: string;
    nest?: { // 그래서 이렇게 한단계 안에 넣어주는 것이 좋다.
        [selector:string]: NestedCss
    }
}