"use client";

import type { FC } from "react";
import { Todo } from "@prisma/client";

type Props = {
  todos: Array<Todo>;
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {todos.map((todo: Todo) => (
        <div key={todo.id} className="w-full border bg-gray-100 p-2 text-center">
          {todo.title}
        </div>
      ))}
    </div>
  );
};
