import { Prisma, User } from "@prisma/client";
import { prisma } from "..";

export default {
  Query: {
    //@ts-ignore
    users: async (obj, args, context, info) => await prisma.user.findMany({
      take: args.take,
      orderBy: {
        id: Prisma.SortOrder.asc
      }
    }),
    //@ts-ignore
    user: async (obj, args, context, info) => await prisma.user.findFirst({
      where: {
        id: {
          equals: args.id
        }
      }
    })
  },

  Mutation: {
    //@ts-ignore
    createUser: async (obj, args, context, info) => await prisma.user.create({ data: { ...args.user } })
  },
};
