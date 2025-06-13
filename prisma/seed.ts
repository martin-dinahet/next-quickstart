import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const todosData: Array<Prisma.TodoCreateInput> = [
  {
    title: "Do the dishes",
    status: "TODO",
  },
  {
    title: "Clean the room",
    status: "IN_PROGRESS",
  },
  {
    title: "Make dinner",
    status: "DONE",
  },
];

export const main = async () => {
  for (const t of todosData) {
    await prisma.todo.create({ data: t });
  }
};

main();
