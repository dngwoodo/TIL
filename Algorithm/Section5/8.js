// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// ▣ 입력예제 1
// bacaAacba abc

// ▣ 출력예제 1
// 3

// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.

// 푼 시간: 40분
// function solution(s, t) {
//   let answer = 0;
//   let rt = t.length - 1;
//   let lt = 0;
//   let stringHash = new Map();

//   for (const x of t) {
//     if (!stringHash.has(x)) stringHash.set(x, 1);
//     else stringHash.set(x, stringHash.get(x) + 1);
//   }

//   while (rt !== s.length) {
//     let stringHash2 = new Map();
//     let value = 0;

//     for (const x of t) {
//       if (!stringHash2.has(x)) stringHash2.set(x, 1);
//       else stringHash2.set(x, stringHash2.get(x) + 1);
//     }

//     for (let i = lt; i <= rt; i++) {
//       if (!stringHash2.has(s[i]) || stringHash2.get(s[i]) === 0) break;
//       else {
//         stringHash2.set(s[i], stringHash2.get(s[i]) - 1);
//         if (stringHash2.get(s[i]) === 0) value++;
//       }
//     }

//     if (value === t.length) answer++;
//     lt++;
//     rt++;
//   }

//   return answer;
// }

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));

// NOTE: 해시 테이블 비교
function compareMaps(map1, map2) {
  // NOTE: 사이즈 비교
  if (map1.size !== map2.size) return false;

  // NOTE: 해시 테이블들의 key, value 값이 같은지 확인
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  // NOTE: 비교할 대상(t)의 해시 테이블 생성
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // NOTE: 비교할 대상(s)의 해시 테이블 생성(2개만 미리 생성)
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  // NOTE: 비교
  let lt = 0;
  // NOTE: 내 풀이는 for문의 조건 부분을 while로 사용
  for (let rt = len; rt < s.length; rt++) {
    // NOTE: 비교할 대상(s)의 해시 테이블에 추가(미리 만들어둔 2개에 추가해주는 형식) - 슬라이딩 윈도우
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    // NOTE: 해시 테이블 비교
    if (compareMaps(sH, tH)) answer++;

    // NOTE: 첫번째로 넣은 해시 테이블 컬럼의 값을 -1 해줌(해시 테이블에서 0이면 삭제하고 0이 아니라면 다른 값과 중복이므로 삭제하면 안됨)
    sH.set(s[lt], sH.get(s[lt]) - 1);

    // NOTE: 비교할 대상(s)의 해시 테이블에 삭제(제일 앞에꺼 삭제) - 슬라이딩 윈도우
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
