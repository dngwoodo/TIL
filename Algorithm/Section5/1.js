// 두 배열 합치기

// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.

// ▣ 입력예제 1
// 3
// 1 3 5
// 5
// 2 3 6 7 9

// ▣ 출력예제 1
// 1 2 3 3 5 6 7 9

// 푼 시간: 30초

function solution(arr1, arr2) {
  let answer = [];
  answer = [...arr1, ...arr2].sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 강의 풀이
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0); // p1(포인터), p2(포인터)를 이용하여 투 포인터 알고리즘 이용
  // 둘중에 하나라도 거짓이면 while문을 종료하고 밑에서 answer에 전부 추가
  while (p1 < n && p2 < m) {
    // p1과 p2위치에 있는 요소를 비교하여 큰 포인터의 값을 answer에 집어넣은다음 포인터 + 1을 한다
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  // 이미 오름차순으로 정렬이 되어있기 때문에 answer에 차례대로 추가
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
