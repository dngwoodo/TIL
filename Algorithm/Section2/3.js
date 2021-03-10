// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.
// 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 그림 첨부
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

// 입력
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

// 출력
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

// * 내 풀이
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    // 규칙
    // 자기보다 1이 크면 이기고, 그 이상은 진다.
    // 같으면 비긴다.
    const result = a[i] - b[i];
    if (result === 1) answer += "A";
    if (result === -1) answer += "B";
    if (result > 1) answer += "B";
    if (result < -1) answer += "A";
    if (result === 0) answer += "D";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// * 강의 풀이
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === b[i]) answer += "D "; // D의 경우의 수 다 적어주기
//   else if (a[i] === 1 && b[i] === 3) answer += "A "; // A의 경우의 수 다 적어주기
//   else if (a[i] === 2 && b[i] === 1) answer += "A ";
//   else if (a[i] === 3 && b[i] === 2) answer += "A ";
//   else answer += "B "; // 다른 모든 경우의수는 B임.
// }
