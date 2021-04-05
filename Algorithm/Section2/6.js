// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

// 그림 pdf 참조

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
// 각 자연수는 100을 넘지 않는다.

// ▣ 출력설명
// 최대합을 출력합니다.

// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// ▣ 출력예제
// 1 155

// 내 풀이
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let row = Array(arr[0].length).fill(0);
//   let column = Array(arr.length).fill(0);
//   let diagonal = Array(2).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       row[i] += arr[i][j];
//       column[j] += arr[i][j];
//     }

//     diagonal[0] += arr[i][i];
//     diagonal[1] += arr[i][arr.length - 1 - i];
//   }

//   ! 내 풀이의 문제점은 위의 for문안에서 모든 걸 처리할 수 있었는데 이런식으로 또 빼서
//   ! 연산하는 것이 문제.
//   const resultValue = [...row, ...column, ...diagonal];
//   resultValue.sort((a, b) => {
//     return b - a; // 양수면 그대로, 음수면 변경
//   });

//   answer = resultValue[0];
//   return answer;
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// console.log(solution(arr));

// 강의 풀이
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 가장 작은 값 설정
  let n = arr.length;
  let columnSum = 0;
  let rowSum = 0;
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    columnSum = rowSum = 0; // 0으로 초기화
    for (let j = 0; j < n; j++) {
      columnSum += arr[i][j]; // column 합
      rowSum += arr[j][i]; // row 합
    }
    answer = Math.max(answer, columnSum, rowSum); // * 합을 구할 때마다 바로바로 max값을 answer에 넣어줌. 이 부분이 중요
    firstDiagonalSum += arr[i][i]; // 첫번째 대각선 합
    secondDiagonalSum += arr[i][n - i - 1]; // 두번째 대각선 합
    if (i === n - 1) {
      answer = Math.max(answer, firstDiagonalSum, secondDiagonalSum);
    }
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// 배운 것
// 한번 연산한걸 또 뒤에서 연산하지말고
// 최대한 하나의 로직안에서 해결할 수 있는건 다 해결하는것이 효율성이 좋다
