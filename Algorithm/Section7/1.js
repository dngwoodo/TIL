// 선택 정렬

// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.

// ▣ 입력예제 1
// 6
// 13 5 11 7 23 15

// ▣ 출력예제 1
// 5 7 11 13 15 23

// 푼 시간: 10분

// 내 풀이: 강의 풀이와 같음. 대신 구조분해할당을 좀 더 알게 된 문제였음
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         const a = arr[i];
//         const b = arr[j];
//         arr[i] = b;
//         arr[j] = a;
//       }
//     }
//   }
//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

// 강의 풀이
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }

    // NOTE: 배열의 값을 이렇게 바꿀 수 있음, "구조분해할당"이다
    // NOTE: 구조분해할당이란 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 해주는 것이다
    // NOTE: [a, b] = [10, 20]
    // NOTE: 값 해체 = 바꿔줄 값
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
