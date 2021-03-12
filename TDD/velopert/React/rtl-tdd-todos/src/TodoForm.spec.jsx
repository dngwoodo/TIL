// TodoForm은 뭘 적는 곳임.

import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoFrom />", () => {
  // 1. dom에 뭐가 있을 지 먼저 생각하자(UI 구성하기)
  it("has input and a button", () => {
    const utils = render(<TodoForm></TodoForm>);
    utils.getByPlaceholderText("할 일을 입력해주세요"); // input
    utils.getByText("확인"); // button
  });

  // 2. input의 값이 잘 바뀌는지 테스트 해보자(input 상태 관리하기)
  it("change input", () => {
    const utils = render(<TodoForm></TodoForm>);
    const input = utils.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(input, { target: { value: "밥먹기" } });
    // expect(input.value).toBe("밥먹기"); // 내가 생각 한 것
    expect(input).toHaveAttribute("value", "밥먹기"); // 블로그에서 정의한 것(내가 생각한 것 이랑 뭘 써도 상관없음), 해당 DOM에 특정 속성과 값을 있는지 확인해줌
    fireEvent.change(input, { target: { value: "" } });
    // expect(input.value).toBe(""); // 내가 생각 한것
    expect(input).toHaveAttribute("value", ""); // 블로그에서 정의한 것(내가 생각한 것 이랑 뭘 써도 상관없음), 해당 DOM에 특정 속성과 값을 있는지 확인해줌
  });
});
