// 마구간 정하기(결정알고리즘)

// N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 각 마구간에는 한 마리의 말만 넣을 수 있고,
// 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다. 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

// ▣ 입력예제 1
// 5 3
// 1 2 8 4 9

// ▣ 출력예제 1
// 3

// 푼 시간: 25분, GG
// 못 푼 이유 : 문제 이해를 하지 못함. 두마리의 거리가 최대가 되게 한다는 뜻은 최대로 몇까지 벌렸을때 말 3마리가 들어가는지를 물어보는 것이다.

function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0]; // NOTE: 무조건 제일 앞 좌표가 첫번째 엔드포인트이다.

  for (let i = 1; i < stable.length; i++) {
    // NOTE: 내가 정한 최대거리(dist)와 실제 마굿간의 거리(stable[i] - ep)를 비교하는 로직
    if (stable[i] - ep >= dist) {
      cnt++; // NOTE: 들어갈 수 있는 말 마릿수를 의미
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1] - 1;

  // 이분 검색: 체득을 위해 로직을 외우자
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2, 10);

    // NOTE: 정한 거리를 기준으로 들어갈 수 있는 말의 마릿수를 체크하는 로직
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

// 좌표를 의미함
let arr = [1, 2, 8, 4, 9];

console.log(solution(3, arr));
