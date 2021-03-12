import React from "react";
import TodoList from "./TodoList";
import { fireEvent, render } from "@testing-library/react";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  // UI 확인하기
  it("renders todos properly", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  // onToggle, onRemove 동작하는지 확인하기, TodoItem에 onToggle, onRemove를 주므로 TodoItem에 접근해서 클릭해보면 된다.
  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );

    fireEvent.click(getByText(sampleTodos[0].text)); // 텍스트를 클릭 시
    expect(onToggle).toBeCalledWith(sampleTodos[0].id); // onToggle 함수가 sampleTodos[0].id 인자와 같이 호출 되는 지

    fireEvent.click(getAllByText("삭제")[0]); // 첫번째 삭제 버튼을 클릭
    expect(onRemove).toBeCalledWith(sampleTodos[0].id); // onRemove 함수가 sampleTodos[0].id 인자와 같이 호출 되는 지
  });

  //
});
