// 아나그램(해시)

// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
// 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.

// ▣ 입력설명
// 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

// ▣ 입력예제 1
// AbaAeCe baeeACA

// ▣ 출력예제 1
// YES

// ▣ 입력예제 2
// abaCC
// Caaab

// ▣ 출력예제 2
// NO

// 푼 시간: 25분

// 내 풀이: for문을 3개를 썻는데 조금만 더 생각하면 2개로 줄일 수 있었음
// function solution(str1, str2) {
//   let answer = "YES";
//   const stringHash = new Map();

//   for (const x of str1) {
//     if (!stringHash.has(x)) stringHash.set(x, 1);
//     else stringHash.set(x, stringHash.get(x) + 1);
//   }

//   for (const x of str2) {
//     if (!stringHash.has(x)) return "NO";
//     else stringHash.set(x, stringHash.get(x) - 1);
//   }

//   for (const [_, value] of stringHash) {
//     if (value !== 0) return "NO";
//   }

//   return answer;
// }

// let a = "abaCC"; // a2 b1 C2
// let b = "Caaab"; // a3 b1 C1
// console.log(solution(a, b));

// 강의 풀이
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    // NOTE: 이 부분이 for문 하나를 줄 일수 있는 부분
    // NOTE: for문이 도는데 sH.get(x) === 0 이라면 -1이 되므로 무조건 NO 출력
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
