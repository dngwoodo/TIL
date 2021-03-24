#### 매일 사용법 연습

- [ ] 3월 24일
- [ ] 3월 25일
- [ ] 3월 26일
- [ ] 3월 27일
- [ ] 3월 28일
- [ ] 3월 29일
- [ ] 3월 30일
- [ ] 3월 31일

#### 헷갈리는 부분 정리

- padding

  - p0 ~ : 숫자 x 4

- width

  - w-0 ~ : 숫자 x 4

- border

  - border-b: (border-bottom-with: 1px) <- default 값
  - border-0, border-2, border-4, border-8: (border-width: 0px, 2px, 4px, 8px)

- space between(자식 요소끼리의 공간 유틸리티)

  - space-y-1: 위아래로 4px씩 공간 확보
  - space-y-0: 숫자 x 4

- font-size

  - text-xs, sm, base, lg, xl: 12px , 14px, 16px, 18px, 20px(2px씩 증가)
  - xl, 2xl, 3xl... : 20px, 24px, 30px ... (2씩 누적 되서 올라감)

- rounded(border-radius)

  - border-{direction}-{size}: border-l-2xl, border-bl-xl
  - rounded-none, sm, '', md, lg, xl: 0px, 2px, 4px, 8px, 12px(2px씩 증가)
  - rounded-xl, 2xl, 3xl: 12px, 16px, 24px
  - rounded-full: 9999px

- Responsive Design

  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

#### Customizing 하는 법 정리

```js
// tailwind.config.js
module.exports = {
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px", // 추가
      4: "4px",
      6: "6px", // 추가
      8: "8px",
    },
  },
};
```
