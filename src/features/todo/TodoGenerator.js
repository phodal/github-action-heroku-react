import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { addTodoItem } from "../../api/todos"

const TodoGenerator = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);
  const dispatch = useDispatch();

  const submit = () => {
    addTodoItem(text).then((response) => {
      dispatch(addTodo(response.data));
      setText("");
    });
  };

  return (
    <div className="form-container">
      <input
        className={"item"}
        onChange={handleChange}
        placeholder="input a new todo here..."
        value={text}
      />
      <input className="submit" type="button" value="add" onClick={submit} />
    </div>
  );
};

export default TodoGenerator;
