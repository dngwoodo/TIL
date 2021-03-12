import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton); // 버튼이 클릭 되고 1초 뒤에 토클 된다.
    await waitFor(() => getByText("야호!!")); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다린다. 대기시간이 timeout을 초과하게 되면 테스트 케이스 실패(기본 4500ms) (원래는 wait 였음)
    // await waitFor(() => getByText('야호!!'), { timeout: 3000 }); // timeout을 이렇게 정해줄 수 있음.
  });

  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText("ON")); // 특정 엘리먼트가, 나타났거나, 바뀌었거나, 사라질때까지 대기(원래는 waitForElement 였음)
    expect(text).toHaveTextContent("ON");
  });
});
