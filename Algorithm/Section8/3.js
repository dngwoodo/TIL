// 이진트리 순회(깊이우선탐색)

// 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
// 그림 PDF 참조
// 전위순회 출력 : 1 2 4 5 3 6 7
// 중위순회 출력 : 4 2 5 1 6 3 7
// 후위순회 출력 : 4 5 2 6 7 3 1

function solution(n) {
  let answer = "";
  function DFS(v) {
    // NOTE: 재귀는 그냥 포맷이 if/else로 시작한다고 생각하자
    if (v > 7) return;
    else {
      // NOTE: 스택프레임을 직접 그려보면 바로 이해감

      console.log(v); // NOTE: 전위 순회
      DFS(v * 2); // NOTE: 왼쪽 자식
      // console.log(v); // NOTE: 중위 순회
      DFS(v * 2 + 1); // NOTE: 오른쪽 자식
      // console.log(v); // NOTE: 후위 순회
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));
