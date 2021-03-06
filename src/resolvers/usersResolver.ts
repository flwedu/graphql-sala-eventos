import { Prisma, User } from "@prisma/client";
import { prisma } from "..";

export default {
  Query: {
    //@ts-ignore
    users: async (obj, args, context, info) => await prisma.user.findMany({
      take: args.take,
      skip: (args.page * args.take),
      orderBy: {
        id: Prisma.SortOrder.asc
      }
    }),
    //@ts-ignore
    user: async (obj, args, context, info) => await prisma.user.findFirst({
      where: {
        id: {
          equals: Number(args.id)
        }
      }
    }),
  },

  Mutation: {
    //@ts-ignore
    createUser: async (obj, args, context, info) => await prisma.user.create({ data: { ...args.user } })
  },

  User: {
    //@ts-ignore
    rooms: async (obj, args, context, info) => {
      return await prisma.room.findMany({
        where: {
          userId: Number(obj.id)
        }
      })
    },
    //@ts-ignore
    roomEvents: async (obj, args, context, info) => prisma.roomEvent.findMany({
      where: {
        userId: Number(obj.id)
      }
    }),
    //@ts-ignore
    roomEventPresences: async (obj, args, context, info) => prisma.roomEventPresence.findMany({
      where: {
        userId: Number(obj.id)
      }
    })
  }
};
