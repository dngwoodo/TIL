interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

/**
 * 4. 사용자가 데이터를 넣어서 한단계 더 감싸는 것은 불변성을 유지하는 것이 좋다.
 * 불변성이란 한번 값이 들어온것이 더이상 안바뀌게 하는 것이다.
 * readonly를 사용한다.
 */
type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>; // StackNode | undefined는 옵셔널을 사용한다. 
}

// StackImplementation
class StackImpl<T> implements Stack<T>{
    // 1. size는 사용자가 변경할 수 없다.
    // 2. size는 사용자가 읽을 수 있어야 한다.
    // 3. 외부에서 쓰는 것과 내부에서 쓰는 것의 변수이름이 같으면 _를 붙여줘야 한다.
    private _size: number = 0; // 내부에서 쓰는 것

    /**
     * 5. 단일 연결 리스트에 필요한 head를 생성
     * stack에 node가 없으면 head는 undefined이므로 옵셔널을 사용한다.
     */
    private head?: StackNode<T>;

    constructor(private capacity: number){}

    get size() { // 외부에서 쓰는 것
        return this._size;
    }
    push(value: T){
        /**
         * 6. node를 하나 생성하고 가장 마지막에 들어온 node(head)를 가르킨다.
         * 그리고 head는 새로 들어온 node를 가르켜야 한다.
         */
        if(this.size === this.capacity){
            throw new Error("Stack is full!");
        }
        const node = { value, next: this.head }
        this.head = node;

        this._size++;
    }
    pop(): T {
        /**
         * 7. 지워야 되는 node는 현재 head가 가르키고 있는 node이다.
         * 또한 현재 this.head가 undefined라면 pop메서드의 반환 타입에 undefined도 들어가야 한다.
         * 하지만 그렇게 되면 사용자가 pop 메서드를 사용할 때마다 null 체크(유효성 검사)를 해줘야 되기 때문에 로직안에서 처리하는 것이 좋다(if문 사용)
         * 원래 this.head === undefined를 하는것이 맞지만 null이 들어오게 되면 그냥 통과 되므로 this.head == null로 해준다.
         */
        if(this.head == null) {
            throw new Error("Stack is empty!");
        }
        const node = this.head;
        this.head = node.next;

        this._size--;
        return node.value
    }
}

const stack = new StackImpl<string>(10);
stack.push('Dongwoo 1');
stack.push('Yugesh 2');
stack.push('Steve 3');
while(stack.size !== 0) {
    console.log(stack.pop());
}

// stack.pop() // throw new Error("Stack is empty!");

const stack2 = new StackImpl<number>(10);
stack2.push(1);
stack2.push(2);
stack2.push(3);
while(stack2.size !== 0) {
    console.log(stack2.pop());
}

// stack.pop() // throw new Error("Stack is empty!");