// K번째 큰 수

// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
// 같은 숫자의 카드가 여러장 있을 수 있습니다.
// 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.
// 3장을 뽑을 수 있는 모든 경우를 기록합니다.
// 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.

// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.

// ▣ 출력설명
// 첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.

// ▣ 입력예제 1
// 10 3
// 13 15
// 34 23
// 45 65
// 33 11
// 26 42

// ▣ 출력예제 1
// 143

// 푼시간: 10분

// 내 풀이: 틀린점은 j와 k를 0부터 시작하는 것이 아니라 앞의 for문 변수 + 1부터 시작해야한다.
// 왜냐하면 지금 내 풀이에서는 앞의 for문의 값과 겹치진 않지만 같은 연산이 계속 일어난다. 중복 값을 없애기 때문에 상관없지만 이렇게 푸는것은 좋지 못함.
// function solution(n, k, card) {
//   let answer;

//   let sum = [];
//   // n개의 카드가 들어오면 3개의 합인 모든 경우의 수중에
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i !== j) {
//         for (let k = 0; k < n; k++) {
//           if (k !== j && k !== i) {
//             console.log(card[i], card[j], card[k]) // 이걸 해보면 뭐가 틀렸는지 바로 확인 가능
//             sum.push(card[i] + card[j] + card[k]);
//           }
//         }
//       }
//     }
//   }
//   // k번째로 큰 수를 구해라
//   sum.sort((a, b) => b - a);
//   answer = Array.from(new Set(sum))[k-1];

//   return answer;
// }

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

// 강의 풀이
function solution(n, k, card) {
  let answer;
  let tmp = new Set(); // 유일한 값을 저장할 때 사용
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]); // add를 사용해서 넣어준다.
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
