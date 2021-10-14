// 조합의 경우수(메모제이션)

// 그림은 pdf 참고

// ▣ 입력설명
// 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

// ▣ 출력설명
// 첫째 줄에 조합수를 출력합니다.

// ▣ 입력예제 1
// 53

// ▣ 출력예제 1
// 10

// ▣ 입력예제 2
// 33 19

// ▣ 출력예제 2
// 818809200

function solution(n, r) {
  let answer = [];
  // 메모이제이션
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }

    if (n === r || r === 0) {
      return 1;
    } else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));

// 조합에서 1C0은 1이다.
