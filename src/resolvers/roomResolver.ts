import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        rooms: async (obj, args, context, info) =>
            await prisma.room.findMany({
                skip: (args.take * args.page),
                take: args.take
            })
        ,

        //@ts-ignore
        room: async (obj, args, context, info) => await prisma.room.findFirst({
            where: {
                id: Number(args.id)
            }
        })
    },

    Mutation: {
        //@ts-ignore
        createRoom: async (obj, args, context, info) => await prisma.room.create({
            data: { ...args.room, userId: Number(args.room.userId) },
        }),
    },

    Room: {
        //@ts-ignore
        user: async (obj, args, context, info) =>
            await prisma.user.findFirst({
                where: {
                    id: Number(obj.userId)
                }
            }),
        //@ts-ignore
        roomEvents: async (obj, args, context, info) =>
            await prisma.roomEvent.findMany({
                where: {
                    roomId: Number(obj.id)
                }
            })
    },
};