// 졸업 선물

// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
// 배송비는 할인에 포함되지 않습니다.

// ▣ 입력설명
// 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다. 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다. 상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

// ▣ 출력설명
// 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
// 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

// ▣ 입력예제 1
// 5 28
// 6 6
// 2 2
// 4 3
// 4 5
// 10 3

// ▣ 출력예제 1
// 4

// 출력설명
// (2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.

// 푼 시간: 1시간

// 내 풀이
// function solution(m, product) {
//   let answer = 0;
//   // 전제 조건
//   // 상품비, 선물이 각각 10만원을 넘지 않는다.
//   // 상품비 하나를 50퍼센트 깍을 수 있는 할인권이 있는데 가장 큰 액수(배송료 + discount적용한 선물 가격)를 할인하면 될듯
//   // m이 예산

//   let sum = 1000000000;
//   let productArray = product;
//   let discountPricePlusDeliverFeeArray = [];
//   while (sum - m > 0) {
//     sum = 0;
//     discountPricePlusDeliverFeeArray = [];
//     for (let i = 0; i < productArray.length; i++) {
//       const giftPrice = productArray[i][0];
//       const deliverFee = productArray[i][1];
//       discountPricePlusDeliverFeeArray.push(giftPrice / 2 + deliverFee);
//       sum += giftPrice + deliverFee;
//     }

//     if (sum - m > 0) {
//       const mostExpensivePrice = Math.max(...discountPricePlusDeliverFeeArray);
//       const index = discountPricePlusDeliverFeeArray.findIndex(
//         (val) => val === mostExpensivePrice
//       );
//       const mostExpesiveGiftPrice = productArray[index][0];
//       const discountPrice = mostExpesiveGiftPrice / 2;
//       if (sum - discountPrice > m) {
//         productArray = productArray.filter((val, i) => i !== index);
//         sum = sum - mostExpensivePrice;
//       } else {
//         sum = sum - discountPrice;
//       }
//     }
//   }
//   answer = productArray.length;
//   return answer;
// }

// let arr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];

// console.log(solution(28, arr));

// 강의 풀이
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 가격별 오름차순으로 정렬
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); // product중에 가장 작은 가격애들부터 할인해서 빼봄
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      // j !== i 조건문은 위에서 이미 할인해서 뺏기 때문에 불필요해서 넣어줌
      if (j !== i && product[j][0] + product[j][1] > money) break; // money보다 product[j][0] + product[j][1]가 크다면 포문 종료
      if (j !== i && product[j][0] + product[j][1] <= money) {
        // product[j][0] + product[j][1]가 money보다 같거나 작다면
        money -= product[j][0] + product[j][1]; // money에서 빼버림
        cnt++; // 사줄 수 있는 선물 갯수 추가
      }
    }
    answer = Math.max(answer, cnt); // 포문 돌때마다 cnt를 비교해서 가장 많이 사줄 수 있는 경우의 수를 찾는다
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
