export {}

// Java: Exception이라는 클래스가 있음
// JavaScript: Error라는 클래스가 있음

// Exception: 예상하지 못한 에러 - 최대한 어플리케이션 내부에서 해결하려고 노력하다가 정안되면 사용자에게 에러 표시를 해준다.
// Error State: 예상 할 수 있는 에러

// 전혀 예상하지 못한 에러(Exception Error)
const array = new Array(1000000000000000000); // RangeError: Invalid array length

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
        // case 'he':
        //   break;
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


