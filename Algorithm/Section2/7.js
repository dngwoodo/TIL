// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

// 그림 pdf 참조

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

// ▣ 출력설명
// 봉우리의 개수를 출력하세요.

// ▣ 입력예제 1
// 5
// 53723
// 37161
// 72534
// 43641
// 87352

// ▣ 출력예제 1
// 10

// 내 풀이: dx,dy를 보지못하고 시작해서 이렇게 품. Math.max보단 상하좌우 하나씩 계산할때마다 비교하고 break 거는게 좋아보임
// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;
//   let top = 0;
//   let right = 0;
//   let bottom = 0;
//   let left = 0;

//   for (let i = 0; i < n; i++) {
//     console.log("row order", i);
//     for (let j = 0; j < n; j++) {
//       // 상하좌우 값을 하나씩 만들때마다 값을 비교해서 break를 걸어주자
//       i === 0 ? (top = 0) : (top = arr[i - 1][j]); // 상
//       i === n - 1 ? (bottom = 0) : (bottom = arr[i + 1][j]); // 하
//       j === 0 ? (left = 0) : (left = arr[i][j - 1]); // 좌
//       j === n - 1 ? (right = 0) : (right = arr[i][j + 1]); // 우

//       console.log(top, bottom, left, right);
//       if (arr[i][j] > Math.max(top, bottom, left, right)) answer += 1;
//     }
//   }
//   return answer;
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];

// // 1,1 = 7(중앙)
// // 0,1 = 3(상)
// // 2,1 = 2(하)
// // 1,0 = 3(좌)
// // 1,2 = 1(우)

// console.log(solution(arr));

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0]; // 행을 기준으로 상하좌우
  let dy = [0, 1, 0, -1]; // 열을 기준으로 상하좌우
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 봉우리인지 판단하는 변수
      for (let k = 0; k < 4; k++) {
        // k = 0 : 상
        // k = 1 : 우
        // k = 2 : 하
        // k = 3: 좌
        let nx = i + dx[k]; // 갈려고 하는 행좌표
        let ny = j + dy[k]; // 갈려고 하는 열좌표
        if (
          nx >= 0 && // 격자 테두리 부분을 갔을 때를 방지
          nx < n && // 격자 테두리 부분을 갔을 때를 방지
          ny >= 0 && // 격자 테두리 부분을 갔을 때를 방지
          ny < n && // // 격자 테두리 부분을 갔을 때를 방지
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break; // 나보다 큰게 나왔는데 굳이 계속 돌필요 없으므로 break를 걸어버린다
        }
      }
      if (flag) answer++; // flag가 0보다크면 봉우리이므로 answer에 +1 해줌
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
