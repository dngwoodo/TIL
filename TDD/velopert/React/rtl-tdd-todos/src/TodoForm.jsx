import React, { useCallback, useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value); // 여기 테스팅
      setValue(""); // 여기 테스팅
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      {/* 클릭 테스팅 */}
      <button type="submit">확인</button>
    </form>
  );
};

export default TodoForm;
