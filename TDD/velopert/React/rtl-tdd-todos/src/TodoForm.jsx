import React, { useCallback, useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">확인</button>
    </form>
  );
};

export default TodoForm;
