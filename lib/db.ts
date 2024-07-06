import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

export const db = global.prisma || new PrismaClient();
global.prisma = global.prisma || db;
