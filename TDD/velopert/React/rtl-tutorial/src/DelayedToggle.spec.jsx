import React from "react";
import DelayedToggle from "./DelayedToggle";
import { render, fireEvent, waitFor } from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton); // 버튼이 클릭 되고 1초 뒤에 토클 된다.
    await waitFor(() => getByText("야호!!")); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다. 대기시간이 timeout을 초과하게 되면 테스트 케이스 실패(기본 4500ms)
    // await waitFor(() => getByText('야호!!'), { timeout: 3000 }); // timeout을 이렇게 정해줄 수 있음.
  });
});
