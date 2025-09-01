"use server";

import type { FC } from "react";
import { TodoList } from "@/components/todo-list";
import { getTodos } from "@/services/todos";

const HomePage: FC = async () => {
  const todos = await getTodos();

  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Next Quickstart</h1>
        <p>
          Edit <code className="bg-gray-100 p-1">./src/app/page.tsx</code> to get started!
        </p>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default HomePage;
