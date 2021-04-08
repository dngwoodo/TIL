// 뒤집은 소수

// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.

// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100

// ▣ 출력예제 1
// 23 2 73 2 3

// 푼시간: 30분
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let temp = x;
//     while (temp % 10 === 0) {
//       temp = Math.floor(temp / 10);
//     }
//     const result = parseInt(temp.toString().split("").reverse().join(""), 10); // ! 굳이 위에서 0을 빼고 뒤집을 필요가 없었음...
//     for (let i = 1; i <= result; i++) {
//       // 소수가 아니라면 for문 중지
//       if (result === 1) {
//         answer.push(result);
//         break;
//       }

//       if (i !== 1 && i !== result && result % i === 0) {
//         break;
//       }

//       // 소수라면 answer에 추가
//       if (i === result) {
//         answer.push(result);
//       }
//     }
//   }
//   return answer;
// }

// const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

// 강의 풀이: 나중에 한번 다시 풀어보자.
function isPrime(num) {
  console.log(parseInt(num), parseInt(Math.sqrt(num))); // Math.sqrt는 num / 2로 해줘도 된다. 절반만 돌면 되기 때문 제곱근이나 나누기2를 해서 돌리는 것
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0; // 23
    while (x) {
      let t = x % 10; // 2, 3, 10으로 나눈 나머지를 구하고
      res = res * 10 + t; // 0 + 2, 20 + 2, 더하고
      x = parseInt(x / 10); // 3, 0, 10으로 나눈 몫을 구하고
    } // 이렇게 while 돌리는 것도 좋지만 내장함수를 이용해서 하는것도 나쁘지 않다. reverse사용
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
