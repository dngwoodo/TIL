export {}
{
    /**
     * Type Inference
     */
    
    let text = 'hello'; // text에 마우스를 올려보면 Type inference가 뜨고 string으로 잡혀져 있다.
    //  text = 1; // error
    
    function print(message){ // message 밑에 ...에 마우스를 올려보면 any 타입이기 때문에 타입을 명시해주라고 나오게 된다.
        console.log(message);
    }
    function print2(message = 'hello'){ // 옵셔널 파라미터로 type이 string으로 추론 되어진다.
        console.log(message);
    }

    function add(x: number, y: number){
        return x + y; // 리턴 값이 number로 추론 되어진다.
    }
    const result = add(1, 2); // result는 number로 추론되어진다.

    // 정리
    // 원시타입일때는 굳이 명시해 줄 필요 없다.
    // function일 경우 실무에서는 이렇게 단순하지 않기 때문에 타입을 명시해주는 것이 좋다.
}