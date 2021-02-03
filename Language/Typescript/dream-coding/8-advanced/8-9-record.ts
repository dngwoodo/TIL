type PageInfo = {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
// 하나는 키, 나머지를 다른 타입으로 묶고 싶을 때 유용하게 쓰인다.
const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'}
}