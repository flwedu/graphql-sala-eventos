import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        rooms: async (obj, args, context, info) => {
            await prisma.room.findMany({
                take: args.take
            })
        },

        //@ts-ignore
        room: async (obj, args, context, info) => await prisma.room.findFirst({
            where: {
                id: args.id
            }
        })
    },

    Mutation: {
        //@ts-ignore
    },

    Room: {
        //@ts-ignore
        createdBy: async (obj, args, context, info) =>
            await prisma.user.findFirst({
                where: {
                    id: obj.userId
                }
            }),
        //@ts-ignore
        events: async (obj, args, context, info) => {
            await prisma.roomEvent.findMany({
                where: {
                    roomId: obj.id
                }
            })
        },
    }
};