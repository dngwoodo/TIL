// 부분집합 구하기(DFS)

// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 단 공집합은 출력하지 않습니다.

// ▣ 입력예제 1
// 3

// ▣ 출력예제 1
// 1 2 3
// 1 2
// 1 3
// 1
// 2 3
// 2
// 3

// 푼 시간: 25분, GG

// 강의풀이
// NOTE: 왼쪽 간선은 부분집합에 포함한다, 오른쪽 간선은 부분집합에 포함하지 않는다로 정하고 이진트리를 그린다.
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // NOTE: n + 1개 만큼 요소 가진 배열 생성
  function DFS(v) {
    // NOTE: DFS(4)에서 멈추고 answer에 답 대입
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      // NOTE: 공집합("") 를 빼기 위한 조건
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // NOTE: 왼쪽 노드
      ch[v] = 1; // NOTE: 포함을 의미
      DFS(v + 1); // NOTE: 왼쪽 노드 값을 의미

      // NOTE: 오른쪽 노드
      ch[v] = 0; // NOTE: 미포함을 의미
      DFS(v + 1); // NOTE: 오른쪽 노드 값을 의미
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
