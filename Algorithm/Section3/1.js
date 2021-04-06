// 회문 문자열

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

// ▣ 입력예제 1
// gooG

// ▣ 출력예제 1
// YES

// 푼 시간: 10분

// 내 풀이
function solution(s) {
  let answer = "YES";
  const str = s.toLowerCase();
  str.split("").every((val, i, array) => {
    // every: return 값이 false면 바로 종료
    if (val !== array[str.length - 1 - i]) {
      answer = "NO";
      return false;
    }
    return true;
  });

  return answer;
}

let str = "goooG";
console.log(solution(str));

// 강의 풀이
// function solution(s){
//   let answer="YES";
//   s=s.toLowerCase();
//   let len=s.length;
//   // Math.floor(len/2)를 하는 이유는 얼마만큼 돌아야되는지 계산하기 위해서이다.
//   // 예를 들어 총 6개문자열이라면 3번, 7번문자열이라면 3번
//   for(let i=0; i<Math.floor(len/2); i++){
//       if(s[i]!=s[len-i-1]) return "NO";
//   }
//   return answer;
// }

// let str="goooG";
// console.log(solution(str));
