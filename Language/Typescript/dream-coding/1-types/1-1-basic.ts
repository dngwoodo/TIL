{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */

    // number
    const num: number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined
    let name: undefined; // 💩, 이렇게 잘 안쓰고 유니온 타입으로 사용
    let age: number | undefined // 유니온 타입, null 보다는 undefined가 보편적으로 많이 사용된다.
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null; // 유니온 타입

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void{
        console.log('hello');
        return ;
    }
    let unusable: void = undefined; // 💩

    // never
    function throwError(message: string): never{
        /**
         * message -> server (log)
         * throw new Error(message);
         */
        while(true){}
    }

    // object
    let obj: Object; // 💩
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}