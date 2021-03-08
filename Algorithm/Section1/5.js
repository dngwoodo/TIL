// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// function solution(arr) {
//   let answer;

//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     if (i === 0) answer = currentValue;
//     else if (answer > currentValue) answer = currentValue;
//   }

//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// * 풀이 : min이라는 변수를 따로 만들어서 가장 큰 수를 넣어두고 초기값을 비교할 때 사용한다.
function solution(arr) {
  let answer;
  // min에 아주 큰 수로 정의해놓는 것도 좋다. 초기 값 비교하기 위해서 사용한다.
  let min = Number.MAX_SAFE_INTEGER; // JavaScript에서 안전한 최대 정수값을 의미, 여기서 아무리 더해도 ===를 해보면 같음
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]; // min의 초기값은 가장 큰값이기 때문에 이렇게 사용가능
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
