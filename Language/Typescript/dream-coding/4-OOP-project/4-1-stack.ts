export {}

// stack의 기본 기능
// LIFO (Last In First Out)
// push
// pop

class Stack {
    arr:any[] = []
    push(value: any){
        this.arr = [...this.arr, value]
        return this.arr
    }

    pop(){
        if(this.arr.length === 0) {
            throw new Error("pop할 요소가 없습니다.");
        }
        this.arr = this.arr.slice(0, -1)
        return this.arr
    }
}

const a = new Stack()
console.log(a.push(1))
console.log(a.push(1))
console.log(a.push(1))
console.log(a.push(23030))
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop()) // error
