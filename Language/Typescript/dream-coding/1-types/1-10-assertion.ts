export {}
{
    /**
     * Type Assertions 💩
     */

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length); // as syntax
    console.log((<string>result).length); // angle-bracket syntax

    const wrong: any = 5;
    // 여기서는 에러 표시가 나지 않지만 컴파일하면 에러가 터지게 된다.
    // 그래서 타입 단언은 내가 100% 확신할 때만 사용해야 한다.
    console.log((wrong as Array<number>).push(1)); // TypeError: wrong.push is not a function

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers(); // findNumbers()! 얘는 무조건 값이 있다는 것을 의미한다.
    numbers!.push(2); // 애도 마찬가지로 무조건 값이 있다는 것을 의미한다.
    const button = document.querySelector('class')!; // !를 쓰는 좋은 예제이다.
    
    // 추가
    // 타입 단언의 위험성
    // https://github.com/dngwoodo/pangyo-typescript/commit/ed2d91955ef6e349e440c29119209498eb216667 
}