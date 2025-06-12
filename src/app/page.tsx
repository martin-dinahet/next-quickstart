import { Todo } from "@prisma/client";
import { getTodos } from "@/services/todos";
import { use } from "react";

const HomePage: React.FC = () => {
  const todos = use(getTodos());

  return (
    <div>
      <h1>Hello, World!</h1>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
