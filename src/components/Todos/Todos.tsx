import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function Todos() {
  const [todoList, setTodoList] = useState<{ name: string }[]>([]);
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    setTodoList([...todoList, { name }]);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoAdd onSubmit={handleAddTodo} />
    </div>
  );
}
