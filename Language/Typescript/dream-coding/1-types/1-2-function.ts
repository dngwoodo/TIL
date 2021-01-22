{
    // JavaScript 💩
    function jsAdd(num1, num2){
        return num1 + num2;
    }

    // Typescript ✨
    function tsAdd(num1: number, num2: number): number{
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id){
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // Typescript ✨
    function tsFetchNum(id: string): Promise<number>{
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
}