import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

module.exports = {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_: any, id: any) => await prisma.user.findUnique({ where: id }),
  },

  Mutation: {
    createUser: (_: any, userData: any) => prisma.user.create({ data: userData }).then(created => { return created }),
  },
};
