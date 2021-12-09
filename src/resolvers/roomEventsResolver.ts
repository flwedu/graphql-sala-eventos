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
        //@ts-ignore
        createRoomEvent: async (obj, args, context, info) => {

            //Verifying if exists an event at the same time
            const concurrentEvent = await prisma.roomEvent.findFirst({
                where: {
                    AND: [
                        {
                            startingTime: {

                                gte: new Date(args.roomEvent.startingTime)
                            }
                        },
                        {
                            endingTime: {
                                lte: new Date(args.roomEvent.endingTime)
                            }
                        }]
                }
            })

            if (!concurrentEvent) return await prisma.roomEvent.create({
                data: {
                    ...args.roomEvent
                }
            })

        }

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