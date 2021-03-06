// TodoForm은 뭘 적는 곳임.

import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoFrom />", () => {
  // 리팩토링(반복 되는 구간을 따로 뺀다.)
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props}></TodoForm>);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력해주세요");
    const button = getByText("확인");
    return {
      ...utils,
      input,
      button,
    };
  };

  // 1. dom에 뭐가 있을 지 먼저 생각하자(UI 구성하기)
  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 truthly한 값인지 확인한다.
    expect(button).toBeTruthy(); // 해당 값이 truthly한 값인지 확인한다.
  });

  // 2. input의 값이 잘 바뀌는지 테스트 해보자(input 상태 관리하기)
  it("change input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "밥먹기" } });
    // expect(input.value).toBe("밥먹기"); // 내가 생각 한 것
    expect(input).toHaveAttribute("value", "밥먹기"); // 블로그에서 정의한 것(내가 생각한 것 이랑 뭘 써도 상관없음), 해당 DOM에 특정 속성과 값을 있는지 확인해줌
    fireEvent.change(input, { target: { value: "" } });
    // expect(input.value).toBe(""); // 내가 생각 한것
    expect(input).toHaveAttribute("value", ""); // 블로그에서 정의한 것(내가 생각한 것 이랑 뭘 써도 상관없음), 해당 DOM에 특정 속성과 값을 있는지 확인해줌
  });

  // click 되었을 경우 어떻게 동작하는 테스트 해보자(submit 이벤트 관리하기)
  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn(); // mock function, 이걸 사용하면 toBeCalled, toBeCalledWith와 같은 것들을 사용해서 호출이 되었는지, 어떤 인자와 호출되었는지 확인 가능하다.
    const { input, button } = setup({ onInsert }); // props 가 필요 할땐 이렇게 직접 파라미터로 전달
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기'라는 파라미터와 함께 호출됐어야함
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
