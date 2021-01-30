interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

// StackImplementation
class StackImpl implements Stack{
    // 1. size는 사용자가 변경할 수 없다.
    // 2. size는 사용자가 읽을 수 있어야 한다.
    // 3. 외부에서 쓰는 것과 내부에서 쓰는 것의 변수이름이 같으면 _를 붙여줘야 한다.
    private _size: number; // 내부에서 쓰는 것
    get size() { // 외부에서 쓰는 것
        return this._size;
    }
    push(value: string ){
        this._size++;
    }
    pop(): string {
        this._size--;
    }
}