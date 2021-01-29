export {}

// 1. 클래스 규격 먼저 세우기
interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

// 리스트
// 배열처럼 정해져있는 칸들이 없다.
// 대신 노드라는 것들이 서로 연결되어져 있는 것을 의미한다.

// 단일 연결 리스트
// 노드가 한 방향으로만 연결되어져 있는 것
// Head가 첫번째 노드만 잘 가르키고 있으면 모든 노드들을 확인할 수 있다.

// 이중 연결 리스트
// 노드가 이중 방향으로 연결되어져 있는 것


// Stack을 구현 할 때 리스트를 사용하는 법
// 단일 연결 리스트를 사용하면 된다.
// 단일 연결 리스트를 수직으로 세우면 stack이 된다.
// Head가 가르키는 노드 위에는 아무것도 없어야 한다.
// Stack에 노드가 하나도 없다면 Head는 null을 가르킨다.

// 힌트를 듣고 코딩한 것
type Head = null | {value: string, head: Head}
class DongwooStack implements Stack {
    head: null | Head;
    stackSize: number = 0;
    constructor(readonly size: number) {}

    push(value: string): void {
        this.stackSize += 1;
        if(this.stackSize > this.size) throw new Error("스택의 크기를 초과했습니다.");
        else {
            const obj = { value, head: this.head };
            this.head = obj;
            console.log(this.stackSize, this.size);
            
            // console.log(this.head);
        }
    }

    pop(): string {
        if(this.head) {
            const popValue = this.head.value
            this.head = this.head.head;
            this.stackSize -= 1;
            console.log(this.head)
            return popValue;
        } else {
            throw new Error("스택에 요소가 없습니다.");
        }
    }
}

const stack = new DongwooStack(10);
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
stack.push("6");
stack.push("7");
stack.push("8");
stack.push("9");
stack.push("10");
// stack.push("11"); // throw new Error("스택의 크기를 초과했습니다.");

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// stack.pop(); // throw new Error("스택에 요소가 없습니다.");
