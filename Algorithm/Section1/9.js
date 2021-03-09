// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// 조건
// 첫 번째 줄에 문자열이 입력된다.

// 출력
// 첫 번째 줄에 바뀐 단어를 출력한다.

// * 내 풀이 - 단점: 쓸데 없는 변수를 만듬
function solution(s) {
  let answer = "";
  const result = s.split("");
  result.forEach((v, i) => {
    if (v === "A") {
      result[i] = "#";
    }
  });
  answer = result.join("");
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// * 강의 풀이 - 위 코드처럼 쓸모없는 result 변수는 만들지 않도록 코딩하자.
// for (let x of s) {
//   if (x === "A") answer += "#";
//   else answer += x;
// }
