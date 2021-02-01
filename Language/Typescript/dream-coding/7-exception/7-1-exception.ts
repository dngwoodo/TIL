export {}

// Java: Exception이라는 클래스가 있음
// JavaScript: Error라는 클래스가 있음

// Exception: 예상하지 못한 에러 - 최대한 어플리케이션 내부에서 해결하려고 노력하다가 정안되면 사용자에게 에러 표시를 해준다.
// Error State: 예상 할 수 있는 에러

// 전혀 예상하지 못한 에러(Exception Error)
// const array = new Array(1000000000000000000); // RangeError: Invalid array length

/**
 * Let's make a game 🕹
 * 전혀 예상하지 못한 에러(Exception Error)를 컴파일단에서 처리하는 법
 */
const position = { x: 0, y:0 }
type Direction = 'up' | 'down' | 'left' | 'right' | 'he'
function move(direction: Direction){
    switch(direction){
        case 'down':
          position.y -= 1 
          break;
        case 'left':
          position.x -= 1
          break;
        case 'right':
          position.x += 1
          break;
        case 'up':
          position.y += 1
          break;
        case 'he':
          break;
        default:
          /**
           * 컴파일단에서 에러를 뿜어주는게 가장 이상적이다.
           * 현재 never에는 값이 할당될 수 없는데 'he' 라는 값이 들어오게 되므로 빨간 에러 표시(컴파일단 에러)가 나게 된다.
           * 이제 유저는 컴파일단에서 에러를 볼 수 있고 바로 고칠 수 있다. 
           * case 'he': 를 생성해야 에러표시가 사라진다.
           */
          const invalid: never = direction;
          throw new Error(`unknown position: ${invalid}`);
    }
}


// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents🗓';
}

function closeFile(fileName: string) {
    //
}

const fileName = 'not exist!💩';

// try는 진짜 에러가 발생할 곳에만 사용하고 다른 부분은 바깥으로 빼주는 것이 좋다.
try {
    console.log(readFile(fileName));    
} catch (error) {
    console.log(`catched!`);
} finally {
    // finally를 사용하는 이유는 만약 try/catch문이 함수 내부에 있고 catch에서 return을 하게 되면 바깥 로직은 실행되지 않지만
    // finally 코드는 실행되기 때문이다.
    closeFile(fileName);
    console.log(`finally!!`);
}

console.log(`!!!`);




