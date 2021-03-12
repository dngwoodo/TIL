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

1. getByRole
1. getByLabelText
1. getByPlaceholderText
1. getByText
1. getByDisplayValue
1. getByAltText
1. getByTitle
1. getByTestId

#### getBy, queryBy, findBy 차이점

- getBy는 그냥 단순히 찾을 때 사용. 못 찾으면 오류 반환
- queryBy는 없는 것을 찾을 때 사용. 못 찾으면 오류반 반환X
- findBy는 비동기 통신 이후 찾을 때 사용.

#### Async Utilities

- waitFor(wait, waitForDomChange, waitForElement는 waitFor로 합쳐짐)
  ```ts
  function waitFor<T>(
    callback: () => T | Promise<T>,
    options?: {
      container?: HTMLElement;
      timeout?: number;
      interval?: number;
      onTimeout?: (error: Error) => Error;
      mutationObserverOptions?: MutationObserverInit;
    }
  ): Promise<T>;
  ```

#### Common mistakes with React Testing Library

- Using wrapper as the variable name for the return value from render

  ```jsx
  // Importance: low
  // ❌
  const wrapper = render(<Example prop="1" />);
  wrapper.rerender(<Example prop="2" />);

  // ✅
  // Advice: destructure what you need from render or call it view.
  const { rerender } = render(<Example prop="1" />);
  rerender(<Example prop="2" />);
  ```

- Using cleanup

  ```jsx
  // Importance: medium
  // ❌
  import { render, screen, cleanup } from "@testing-library/react";
  afterEach(cleanup);

  // ✅
  // Advice: don't use cleanup
  import { render, screen } from "@testing-library/react";
  ```

- Not using screen

  ```jsx
  // Importance: medium
  // ❌
  const { getByRole } = render(<Example />);
  const errorMessageNode = getByRole("alert");

  // ✅
  // Advice: use screen for querying and debugging.
  // The benefit of using screen is you no longer need to keep the render call
  // You can also call screen.debug instead of debug
  render(<Example />);
  const errorMessageNode = screen.getByRole("alert");
  screen.debug();
  ```

- Using the wrong assertion

  ```jsx
  // Importance: high
  const button = screen.getByRole("button", { name: /disabled button/i });

  // ❌
  expect(button.disabled).toBe(true);
  // error message:
  //  expect(received).toBe(expected) // Object.is equality
  //
  //  Expected: true
  //  Received: false

  // ✅
  // Advice: install and use @testing-library/jest-dom
  // 오류 메시지가 훨씬 낫기 때문에 jest-dom이 제공하는 toBeDisabled()를 쓰자.
  // rtl이 제공하는 matcher 이다.
  expect(button).toBeDisabled();
  // error message:
  //   Received element is not disabled:
  //     <button />
  ```

- Wrapping things in act unnecessarily

  ```jsx
  // Importance: medium
  // ❌
  act(() => {
    render(<Example />);
  });
  const input = screen.getByRole("textbox", { name: /choose a fruit/i });
  act(() => {
    fireEvent.keyDown(input, { key: "ArrowDown" });
  });

  // ✅
  // Advice: Learn when act is necessary and don't wrap things in act unnecessarily.
  // they see these "act" warnings all the time and are just desperately trying anything they can to get them to go away <- 이런 이유 때문에 act로 래핑한다.
  // render and fireEvent are already wrapped in act! <- 하지만 render와 fireEvent는 이미 act로 래핑되어져있다.
  render(<Example />);
  const input = screen.getByRole("textbox", { name: /choose a fruit/i });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  ```

- Using the wrong query

  ```jsx
  // Importance: high
  // ❌
  // assuming you've got this DOM to work with:
  // <label>Username</label><input data-testid="username" />
  screen.getByTestId("username");

  // ❌ fails with the following error:
  // Unable to find an element with the text: /hello world/i. This could be
  // because the text is broken up by multiple elements. In this case, you can
  // provide a function for your text matcher to make your matcher more flexible.
  screen.getByText(/hello world/i);

  // ✅
  // 테스트 아이디보다는 getByRole로 찾아서 사용하자. DOM을 가능한 한 최종 사용자의 방식에 가깝게 쿼리하기 위해.
  // geyByText는 중복이 있을 수 있으므로 getByRole을 사용하자.
  // screen.getByRole("")으로 일부러 오류를 내면 사용할 수 있는 role들이 출력된다. 보고 쓰면 되므로 매우 편리함.
  // 정확한 사용방법은 https://www.robinwieruch.de/react-testing-library 에서 REACT TESTING LIBRARY: SEARCH TYPES 참고
  // Advice: Read and follow the recommendations on The "Which Query Should I Use" Guide. <- 공식문서 가이드라인임. 참고
  // change the DOM to be accessible by associating the label and setting the type
  // <label for="username">Username</label><input id="username" type="text" />
  screen.getByRole("textbox", { name: /username/i });
  ```

- Adding aria-, role, and other accessibility attributes incorrectly

  ```jsx
  // Importance: high
  // ❌
  render(<button role="button">Click me</button>);

  // ✅
  // role과 같은 접근자 속성을 직접 붙이는 것은 불필요하며 화면 판독기와 사용자를 혼동 시킬 수 있으므로 좋지 못함.
  // Advice: Avoid adding unnecessary or incorrect accessibility attributes.
  render(<button>Click me</button>);
  ```

- Not using @testing-library/user-event

  ```jsx
  // Importance: medium
  // ❌
  fireEvent.change(input, { target: { value: "hello world" } });

  // ✅
  // userEvent.type은 각 문자에 대해 keyDown, keyPress 및 keyUp 이벤트도 트리거 가능하다.
  // 사용자의 실제 상호작용에 훨씬 가깝다.
  // 이렇게 하면 실제로 변경 이벤트를 수신하지 않는 라이브러리를 사용할 수 있다는 이점이 있다.
  // @testing-library/user-event를 import해서 사용해야 되는 것 같다.
  // Advice: Use @testing-library/user-event over fireEvent where possible.
  userEvent.type(input, "hello world");
  ```

- Using query\* variants for anything except checking for non-existence

  ```jsx
  // Importance: high
  // ❌
  expect(screen.queryByRole("alert")).toBeInTheDocument();

  // ✅
  // queryByRole은 존재하지 않을 때 사용하는 것이 좋다.
  // queryByRole은 요소가 페이지에 렌더링되지 않았는지 확인할 수 있는 유일한 방법이기 때문이다.
  // Advice: Only use the query* variants for asserting that an element cannot be found.
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  ```

- Using waitFor to wait for elements that can be queried with find\*

  ```jsx
  // Importance: high
  // ❌
  const submitButton = await waitFor(() =>
    screen.getByRole("button", { name: /submit/i })
  );

  // ✅
  // 위에나 아래나 동작은 같지만 코드 길이나 에러 메시지에서 차이가 난다.
  // Advice: use find* any time you want to query for something that may not be available right away.
  const submitButton = await screen.findByRole("button", { name: /submit/i });
  ```

- Passing an empty callback to waitFor

  ```jsx
  // Importance: high
  // ❌
  await waitFor(() => {});
  expect(window.fetch).toHaveBeenCalledWith("foo");
  expect(window.fetch).toHaveBeenCalledTimes(1);

  // ✅
  // 빈 콜백함수를 넣지마라.
  // 빈 콜백을 통과하면 이벤트 루프의 한 tick만 기다리면 되기 때문임. 취약한 테스트가 될 수 있다.
  // Advice: wait for a specific assertion inside waitFor.
  await waitFor(() => expect(window.fetch).toHaveBeenCalledWith("foo"));
  expect(window.fetch).toHaveBeenCalledTimes(1);
  ```

- Having multiple assertions in a single waitFor callback

  ```jsx
  // Importance: low
  // ❌
  await waitFor(() => {
    expect(window.fetch).toHaveBeenCalledWith("foo");
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
  // ✅
  // Advice: only put one assertion in a callback.
  await waitFor(() => expect(window.fetch).toHaveBeenCalledWith("foo"));
  expect(window.fetch).toHaveBeenCalledTimes(1);
  ```

- Performing side-effects in waitFor

  ```jsx
  // Importance: high
  // ❌
  await waitFor(() => {
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  // ✅
  // 위 코드처럼 하게 되면 오류가 여러번 실행될 수 있다(?). 그러므로 이벤트는 바깥으로 빼주자.
  // 아직 제대로 이해하지 못함.
  // Advice: put side-effects outside waitFor callbacks and reserve the callback for assertions only.
  fireEvent.keyDown(input, { key: "ArrowDown" });
  await waitFor(() => {
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
  ```

- Using get\* variants as assertions

  ```jsx
  // Importance: low
  // ❌
  screen.getByRole("alert", { name: /error/i });

  // ✅
  // 못찾으면 에러가 나기 떄문에 위에 처럼 해도 상관없지만 밑에 처럼 명시를 해주는 것이 좋다.
  // Advice: If you want to assert that something exists, make that assertion explicit.
  expect(screen.getByRole("alert", { name: /error/i })).toBeInTheDocument();
  ```

#### Resource

[react-testing-library 를 사용한 리액트 컴포넌트 테스트](https://velog.io/@velopert/react-testing-library)<br/>
[쿼리 우선 순위](https://testing-library.com/docs/queries/about/)</br>
[Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)<br/>
[How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library)<br/>
