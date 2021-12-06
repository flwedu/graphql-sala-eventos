import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        roomEvent: async (obj, args, context, info) => await prisma.roomEvent.findFirst({
            where: {
                id: Number(args.id)
            }
        }),
        //@ts-ignore
        roomEventsByAge: async (obj, args, context, info) => await prisma.roomEvent.findMany({
            where: {
                minimumAge: {
                    gt: args.age
                }
            }
        }),
    },

    Mutation: {

    },

    RoomEvent: {
        //@ts-ignore
        room: async (obj, args, context, info) => await prisma.room.findFirst({
            where: {
                id: Number(obj.roomId)
            }
        }),

        //@ts-ignore
        user: async (obj, args, context, info) => await prisma.user.findFirst({
            where: {
                id: Number(obj.userId)
            }
        }),

        //@ts-ignore
        roomEventPresences: async (obj, args, context, info) => await prisma.roomEventPresence.findMany({
            where: {
                roomEventId: Number(obj.id)
            }
        })
    }
}