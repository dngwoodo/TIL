{
    // // JavaScript 💩
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // // Typescript ✨
    // function tsAdd(num1: number, num2: number): number{
    //     return num1 + num2;
    // }

    // // JavaScript 💩
    // function jsFetchNum(id){
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // // Typescript ✨
    // function tsFetchNum(id: string): Promise<number>{
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // JavaScript ✨ => Typescript
    // Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna');

    // Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage(undefined);

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,3,4));
}