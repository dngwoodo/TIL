// 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// ▣ 입력설명
// 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄에 자연수를 출력합니다.

// ▣ 입력예제 1
// g0en2T0s8eSoft

// ▣ 출력예제 1
// 208

// 푼 시간: 2분 30초

function solution(str) {
  let answer = "";
  const s = str.replace(/[^0-9]/g, "");
  answer = parseInt(s, 10);
  return answer;
}
let str = "g0en2T0s8eSoft";
console.log(solution(str));

// 강의 풀이: isNaN을 사용. "1", 1 이렇게 숫자가 들어가면 false 반환해줌
// function solution(str){
//   let answer="";
//   for(let x of str){
//       if(!isNaN(x)) answer+=x;
//   }
//   return parseInt(answer);
// }

// let str="g0en2T0s8eSoft";
// console.log(solution(str));
