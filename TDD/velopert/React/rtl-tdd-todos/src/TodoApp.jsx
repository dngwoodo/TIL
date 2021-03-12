import React, { useCallback, useRef, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([
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
  ]);

  // https://react.vlpt.us/basic/12-variable-with-useRef.html 참고
  // useRef로 설정한 변수 값은 바뀌어도 컴포넌트가 리랜더링 되지 않는다.
  // 리액트는 상태값을 리랜더링 이후에 업데이트 된 상태값을 조회할 수 있지만 useRef는 바로 조회가 가능하다.
  const nextId = useRef(3); // 새로 추가 할 항목에서 사용 할 id

  // 항목  추가 함수
  const onInsert = useCallback((text) => {
    // 새 항목 추가 후
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text,
        done: false,
      })
    );
    // nextId 값에 1 더하기
    nextId.current += 1;
  }, []);

  // 토클 기능 구현하기, done을 true -> false, false -> true로 만듬
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
