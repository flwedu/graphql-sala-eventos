import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        roomEventPresence: async (obj, args, context, info) => await prisma.roomEventPresence.findFirst({
            where: {
                id: args.id
            }
        })
    },
    Mutation: {

    },

    RoomEventPresence: {
        //@ts-ignore
        user: async (obj, args, context, info) => await prisma.user.findFirst({
            where: {
                id: Number(obj.userId)
            }
        }),
        //@ts-ignore
        roomEvent: async (obj, args, context, info) => await prisma.roomEvent.findFirst({
            where: {
                id: Number(obj.roomEventId)
            }
        })
    }
}