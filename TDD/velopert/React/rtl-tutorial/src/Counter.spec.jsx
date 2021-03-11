import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot(); // container 는 해당 컴포넌트의 최상위 DOM을 가르킨다. 이걸 이용해서 스냅샷 테스팅이 가능하다.
  });
  it("has a number and two buttons", () => {
    const utils = render(<Counter />);
    // 버튼과 숫자가 있는지 확인
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });
  it("increases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("+1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton); // fireEvent.이벤트이름(DOM, 이벤트객체); <- change일 경우 이벤트 객체도 반드시 넣어주어야 한다. { target: { value: 'hello world'}}
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("2"); // jest-dom 의 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent 를 직접 비교
  });
  it("decreases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("-1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("-2"); // jest-dom 의 확장 matcher 사용
  });
});
