import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({ todos });
};
