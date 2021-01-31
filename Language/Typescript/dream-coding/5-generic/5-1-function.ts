export {}

/**
 * bad case
 * 이렇게 하게되면 타입별로 함수들을 전부 만들어줘야 한다. 미친 짓임.
 */
function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
        throw new Error('not valid number');
    }
    return arg;
}

const result = checkNotNullBad(123); // 123
console.log(result); // 123
// checkNotNullBad(null); // throw new Error('not valid number');


/**
 * any case
 * 단점은 타입이 보장이 되지 않는다.
 */
function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null) {
        throw new Error('not valid number');
    }
    return arg;
}

const result2 = checkNotNullAnyBad(123); // 123
console.log(result2); // 123
// checkNotNullAny(null); // throw new Error('not valid number');

/**
 * generic case
 * 가장 좋은 케이스이다. 이제 동적으로 타입을 지정할 수 있다.
 */
function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
        throw new Error('not valid number');
    }
    return arg;
}

const result3 = checkNotNull(123); // 타입추론에 의해 number literal type으로 123이 들어가게 된다.
const result4 = checkNotNull(true);
