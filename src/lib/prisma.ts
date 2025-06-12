import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient().$extends(withAccelerate());
