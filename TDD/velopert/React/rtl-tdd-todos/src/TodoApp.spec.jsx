import React from "react";
import TodoApp from "./TodoApp";
import { fireEvent, render } from "@testing-library/react";

describe("<TodoApp />", () => {
  // UI 구성하기
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("확인"); // TodoForm 존재유무 확인
    getByTestId("TodoList"); // TodoList 존재유무 확인, data-testid를 의미한다.
  });

  // 기본 할 일 항목 두개 보여주기
  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });

  // 새 항목 추가 기능 구현하기
  it("creates new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    // 이벤트를 발생시켜서 새 항목을 추가하면
    fireEvent.change(getByPlaceholderText("할 일을 입력해주세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("확인"));
    // 해당 항목이 보여져야합니다.
    getByText("새 항목 추가하기");
  });

  // 토글 기능 구현하기
  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);
    // TDD 배우기 항목에 클릭 이벤트를 발생시키고 text-decoration 속성이 설정되는지 확인
    const todoText = getByText("TDD 배우기");
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });

  // 삭제 기능 구현하기
  it("removes todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("TDD 배우기");
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument(); // 페이지에서 사라졌음을 의미함
    // 이렇게 사용할 수 도 있다.
    // const removedText = queryByText('TDD 배우기');
    // expect(removedText).toBeNull();
  });
});
