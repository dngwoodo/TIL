#### Varient

- getBy: 조건에 일치하는 DOM 엘리먼트 하나 선택
- getAllBy: 조건에 일치하는 DOM 엘리먼트 여러개 선택
- queryBy: 조건에 일치하는 DOM 엘리머느 하나 선택
- queryAllBy: 조건에 일치하는 DOM 엘리먼트 여러개를 선택
- findBy: 조건에 일치하는 DOM 엘리먼트 하나가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환
- findAllBy: 조건에 일치하는 DOM 엘리먼트 여러개가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환
- findBy, findAllBy: 기본 timeout 인 4500ms 이후에도 나타나지 않으면 에러가 발생

#### Queries

- ByLabelText: label 이 있는 input 의 label 내용으로 input 을 선택
- ByPlaceholderText: placeholder 값으로 input 및 textarea 를 선택
- ByText: 엘리먼트가 가지고 있는 텍스트 값으로 DOM 을 선택(정규식도 넣을 수 있음)
- ByAltText: alt 속성을 가지고 있는 엘리먼트 (주로 img) 를 선택
- ByTitle: title 속성을 가지고 있는 DOM 혹은 title 엘리먼트를 지니고있는 SVG 를 선택
- ByDisplayValue: input, textarea, select 가 지니고 있는 현재 값을 가지고 엘리먼트를 선택
  ```jsx
  <input value="text" />;
  const input = getByDisplayValue("text");
  ```
- ByRole: 특정 role 속성값을 지니고 있는 엘리먼트를 선택
- ByTestId: 위의 방법으로 선택하지 못할 때 사용
  ```jsx
  <div data-testid="commondiv">흔한 div</div>;
  const commonDiv = getByTestId("commondiv");
  ```

#### 쿼리 우선순위

1. getByLabelText
1. getByPlaceholderText
1. getByText
1. getByDisplayValue
1. getByAltText
1. getByTitle
1. getByRole
1. getByTestId

#### Resource

[react-testing-library 를 사용한 리액트 컴포넌트 테스트](https://velog.io/@velopert/react-testing-library)
