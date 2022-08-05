import TodoItem from "./TodoItem";

function TodoGroup(props) {
  const { todoList } = props;
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoGroup;
