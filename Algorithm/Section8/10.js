// 순열 구하기

// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

function solution(m, arr) {
  let answer = [];
  // check 배열 필요
  const check = Array.from({ length: arr.length }, () => 0);
  // temp 배열 필요
  const temp = Array.from({ length: m }, () => 0);

  function DFS(level) {
    if (level === m) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        // 순열 문제는 이해도 중요하지만 외우는 것도 중요하다.
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
