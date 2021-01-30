interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

/**
 * 4. 사용자가 데이터를 넣어서 한단계 더 감싸는 것은 불변성을 유지하는 것이 좋다.
 * 불변성이란 한번 값이 들어온것이 더이상 안바뀌게 하는 것이다.
 * readonly를 사용한다.
 */
type StackNode = {
    readonly value: string;
    readonly next?: StackNode; // StackNode | undefined는 옵셔널을 사용한다. 
}

// StackImplementation
class StackImpl implements Stack{
    // 1. size는 사용자가 변경할 수 없다.
    // 2. size는 사용자가 읽을 수 있어야 한다.
    // 3. 외부에서 쓰는 것과 내부에서 쓰는 것의 변수이름이 같으면 _를 붙여줘야 한다.
    private _size: number = 0; // 내부에서 쓰는 것

    /**
     * 5. 단일 연결 리스트에 필요한 head를 생성
     * stack에 node가 없으면 head는 undefined이므로 옵셔널을 사용한다.
     */
    private head?: StackNode;

    get size() { // 외부에서 쓰는 것
        return this._size;
    }
    push(value: string ){
        /**
         * 6. node를 하나 생성하고 가장 마지막에 들어온 node(head)를 가르킨다.
         * 그리고 head는 새로 들어온 node를 가르켜야 한다.
         */
        const node: StackNode = { value, next: this.head }
        this.head = node;

        this._size++;
    }
    pop(): string {
        this._size--;
    }
}