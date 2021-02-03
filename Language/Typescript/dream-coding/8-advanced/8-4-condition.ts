export {}

type Check<T> = T extends string ? boolean : number; // 삼항 연산자 사용
type Type = Check<string>; // boolean

type TypeName<T> = T extends string 
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>; // 'string'
type T1 = TypeName<'a'>; // 'string'
type T2 = TypeName<() => void>; // 'function'
type T3 = TypeName<'a' | 1>; // 'string' | 'number' <- T가 유니온 타입이면 각각 조건문을 돔

const a : T0 = 'string';