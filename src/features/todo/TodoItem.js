import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";

function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div onClick={onToggle} className={todo.done ? "done" : ""}>
      <span>{todo.text}</span>
      <span className="times" onClick={onDelete}>
        X
      </span>
    </div>
  );
}

export default TodoItem;
