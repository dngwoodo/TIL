// 수열 추측하기

// 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
// 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
// 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

// 3124
// 436
// 79
// 16

// N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오.
// 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

// ▣ 입력설명
// 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다.
// N은 가장 윗줄에 있는 숫자의 개수를 의미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

// ▣ 출력설명
// 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다.
// 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다.

// ▣ 입력예제 1
// 4 16

// ▣ 출력예제 1
// 3124

function solution(n, f) {
  let answer;
  let flag = 0;

  const dy = Array.from(Array(11), () => Array(11).fill(0)); // 1x11 2차원 배열
  const check = Array.from({ length: n + 1 }, () => 0); // [0,0,0,0,0]

  // 수열과 조합수의 각 열을 곱한 값을 더한 값이 f가 되면 된다.
  const 수열 = Array.from({ length: n }, () => 0); // [0,0,0,0]
  const 조합수 = Array.from({ length: n }, () => 0); // [0,0,0,0]

  function combination(n, r) {
    // 메모이제이션이 되어있다면 그 값을 반환
    if (dy[n][r] > 0) {
      return dy[n][r];
    }

    // 조합공식에서 nCn, nC0 일때 무조건 1임.
    if (n === r || r === 0) {
      return 1;
    }

    // 메모이제이션을 위해 저장
    dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
    return dy[n][r];
  }

  // 여기가 아직 이해가 덜 됨. 그림을 그려서 파악하자.
  function DFS(level, sum) {
    if (flag) {
      return;
    }

    if (level === n && sum === f) {
      answer = 수열.slice();
      flag = 1;
      return;
    }

    for (let i = 1; i <= n; i++) {
      // 체크가 안되어있다면
      if (check[i] === 0) {
        check[i] = 1; // 체크
        수열[level] = i;
        DFS(level + 1, sum + 조합수[level] * 수열[level]); // sum값에 수열과 조합수의 열을 곱한 값을 더한다.
        check[i] = 0; // 체크 풀기
      }
    }
  }

  // 조합수 구하기
  for (let i = 0; i < n; i++) {
    조합수[i] = combination(n - 1, i); // [3C0, 3C1, 3C2, 3C3] <== [1, 3, 3, 1]
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
