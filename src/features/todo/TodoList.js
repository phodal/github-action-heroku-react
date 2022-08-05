import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../api/todos";
import { initData } from "./todoSlice";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then(response => {
      dispatch(initData(response.data));
    })
  }, [dispatch]);

  return (
    <div>
      <h1>TodoList</h1>
      <TodoGroup todoList={todoList}/>
      <TodoGenerator />
    </div>
  );
}

export default TodoList;
