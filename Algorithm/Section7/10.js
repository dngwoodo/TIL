// 이분검색

// 임의의 N개의 숫자가 입력으로 주어집니다.
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
// 단 중복값은 존재하지 않습니다.

// ▣ 입력설명
// 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다. 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

// ▣ 출력설명
// 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

// ▣ 입력예제 1
// 8 32
// 23 87 65 12 57 32 99 81

// ▣ 출력예제 1
// 3

// 푼 시간: 1분 30초
// function solution(target, arr) {
//   let answer;
//   arr
//     .sort((a, b) => a - b)
//     .some((val, i) => {
//       // NOTE: 내 풀이의 문제점
//       // NOTE: 앞에서 부터 차례대로 탐색하는 것을 순차 탐색이라고 한다.
//       // NOTE: 순차 탐색은 시간 복잡도가 O(n)이다
//       if (val === target) {
//         answer = i + 1;
//         return true;
//       }
//     });

//   return answer;
// }

// let arr = [23, 87, 65, 12, 57, 32, 99, 81];
// console.log(solution(32, arr));

// 강의 풀이: 이분 검색은 시간 복잡도는 O(log n)이다
function solution(target, arr) {
  let answer;
  // NOTE: 이분 검색은 자료가 무조건 '정렬' 되어있어야 한다.
  arr.sort((a, b) => a - b);

  // NOTE: lt, rt를 배열 좌우 끝으로 잡고 나누기 2를 한다음 target 인지 아닌지 확인
  // NOTE: 아닐 경우 target보다 큰지 안큰지 확인
  // NOTE: target보다 작다면 rt를 mid - 1에 배치 (범위의 반이 날아감. 매우 효율적임)
  // NOTE: target보다 크다면 lt를 mid + 1에 배치
  // NOTE: 반복
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

// NOTE: 비교해야될 대상이 8개면 log2의 8임. 즉 무조건 3번만에 답을 찾음
// NOTE: 8 / 2 = 4, 4 / 2 = 2, 2 / 2 = 1 이기 때문에 1개만 남을 때 까지 계산하는 수가 3번임
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
