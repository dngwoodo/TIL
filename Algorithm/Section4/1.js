// 자릿수의 합

// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.

// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123

// ▣ 출력예제 1
// 137

// 푼 시간: 10분

// function solution(n, arr) {
//   let answer = 0;
//   let max = 0;
//   for (const element of arr) {
//     let value = 0; // 초기화
//     element
//       .toString()
//       .split("")
//       .forEach((val) => {
//         value += parseInt(val, 10);
//       });
//     max = Math.max(max, value);
//     if (Math.max(max, value) === value) {
//       answer = Math.max(element, answer); // max값이 valu와 같으면 더 큰값이 나와야하므로 answer에 대입
//     }
//   }
//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// 강의 풀이: 좀 더 수학적으로 접근
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER; // 가장 작은 값
  for (let x of arr) {
    let sum = 0, // 8 + 2 + 1
      tmp = x;
    while (tmp) {
      sum += tmp % 10; // 10으로 나눈 나머지 값을 더해주면 다 각자릿수를 더하는것과 같다
      tmp = Math.floor(tmp / 10); // while을 멈추기 위해서 몫을 계산한다
    }
    // sum의 값이 max보다 크다면
    if (sum > max) {
      max = sum; // max에 sum값을 넣음
      answer = x; // 해당 숫자를 answer에 대입
    } else if (sum === max) {
      // sum과 max가 같다면 원래 숫자가 더 큰것을 넣어야함
      if (x > answer) answer = x; // x와 answer를 비교해서 더 큰값을 answer에 집어넣음
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
