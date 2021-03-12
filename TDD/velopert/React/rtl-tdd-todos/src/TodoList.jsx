import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    // querySelector를 사용할 수도 있지만 권장하지 않음. testid를 사용한다
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
