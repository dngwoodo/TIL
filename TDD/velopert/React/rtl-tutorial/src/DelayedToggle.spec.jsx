import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  fireEvent,
  waitFor,
  screen,
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
    render(<DelayedToggle />);
    // Role 종류는 https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles <- 여기 참고
    const toggleButton = screen.getByRole("button", { name: /토글/i }); // i는 대소문자 무시
    fireEvent.click(toggleButton);
    // screen.getByRole("") // <- 이렇게 일부러 오류를 내면 role을 쓸 수 있는 아이들이 출력 된다. 매우 편리하다. 보고 쓰면 된다. https://www.robinwieruch.de/react-testing-library <- 참고
    await screen.findByText("야호!!"); // 돔이 바뀐 이후의 화면에서 찾고 싶으면 findBy를 이용한다.
  });

  it("removes text when toggle is OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await screen.findByText("야호!!"); // ON이 됨
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText("야호!!")); // 비동기 로직 이후 바뀌는 것은 queryBy varient로 찾지 못함. 그래서 사용
  });
});
