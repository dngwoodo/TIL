// 삽입 정렬

// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.

// ▣ 입력예제 1
// 6
// 11 7 5 6 10 9

// ▣ 출력예제 1
// 5 6 7 9 10 11

// 푼 시간: 15분

// 내 풀이: 삽입 정렬이 무엇인지 부터 찾음
// 삽입 정렬: 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
// https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html 참고
// function solution(arr) {
//   let answer = arr;

//   for (let i = 1; i < answer.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (answer[j] > answer[j - 1])
//         [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
//       else break;
//     }
//   }

//   return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

// 강의 풀이
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    // NOTE: tmp는 자기 자리를 찾을 아이
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      // NOTE: tmp 앞의 값이 tmp보다 크다면 tmp자리에 tmp앞의 값을 넣음
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }

    // NOTE: j 포문을 다돌았을 때 j+1에 tmp 삽입
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
