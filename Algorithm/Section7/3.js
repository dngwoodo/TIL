// Special Sort(구글 인터뷰)

// N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

// ▣ 입력설명
// 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진 다. 숫자 0은 입력되지 않는다.

// ▣ 출력설명
// 정렬된 결과를 출력한다.

// ▣ 입력예제 1
// 8
// 1 2 3 -3 -2 5 6 -6

// ▣ 출력예제 1
// -3 -2 -6 1 2 3 5 6

// 푼 시간: 10분

// 내 풀이
// function solution(arr) {
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) answer.unshift(arr[i]);
//     else answer.push(arr[i]);
//   }
//   return answer;
// }

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

// 강의 풀이 1
function solution(arr) {
  let answer = arr;
  // NOTE: 버블 정렬 사용
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // NOTE: arr[j]가 양수이고 arr[j+1]이 음수 일 경우에만 자리 체인지
      // NOTE: 정렬을 할때 여기 조건문만 잘 조절하면 버블 정렬로 대부분 할 수 있을 듯
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      console.log(arr);
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 강의 풀이 2
// function solution(arr) {
//   let answer = [];

//   // NOTE: 양수인 아이들을 먼저 대입한다
//   for (let x of arr) {
//     if (x < 0) answer.push(x);
//   }

//   // NOTE: 음수인 아이들은 나중에 대입한다
//   for (let x of arr) {
//     if (x > 0) answer.push(x);
//   }
//   return answer;
// }

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));
