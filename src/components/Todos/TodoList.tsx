import { withLogger } from "../../utils/withLogger";

function TodoList({ todoList }: { todoList: { name: string }[] }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.name}>{todo.name}</li>
      ))}
    </ul>
  );
}

const TodoListWithLogger = withLogger<{ todoList: { name: string }[] }>(
  TodoList
);
export default TodoListWithLogger;
