import { Prisma, User } from "@prisma/client";
import { prisma } from "..";

export default {
  Query: {
    //@ts-ignore
    users: async (_, { take }) => await prisma.user.findMany({
      take: take,
      orderBy: {
        id: Prisma.SortOrder.asc
      }
    }),
    //@ts-ignore
    user: async (_, { id }) => await prisma.user.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })
  },

  Mutation: {
    //@ts-ignore
    createUser: async (_, { user }) => await prisma.user.create({ data: { ...user } })
  },
};
