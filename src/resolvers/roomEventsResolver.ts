import { RoomEvent } from "@prisma/client";
import { prisma } from "..";

export default {
    Query: {

        roomEvent: async (_parent: any, args: { id: any; }, _context: any, _info: any) => await prisma.roomEvent.findFirst({
            where: {
                id: Number(args.id)
            }
        }),
        roomEventsByAge: async (_parent: any, args: { age: any; }, _context: any, _info: any) => await prisma.roomEvent.findMany({
            where: {
                minimumAge: {
                    gt: args.age
                }
            }
        }),
    },

    Mutation: {
        createRoomEvent: async (_parent: any, args: { roomEvent: RoomEvent; }, _context: any, _info: any) => {

            //Verifying if exists an event at the same time
            const concurrentEvent = await prisma.roomEvent.findMany({
                where: {
                    OR: [{
                        AND: [
                            {
                                startingTime: {
                                    lte: args.roomEvent.startingTime
                                }
                            },
                            {
                                endingTime: {
                                    gte: args.roomEvent.startingTime
                                }
                            }]
                    },
                    {
                        AND: [
                            {
                                endingTime: {
                                    gte: args.roomEvent.endingTime
                                }
                            },
                            {
                                startingTime: {
                                    lte: args.roomEvent.endingTime
                                }
                            }]
                    }
                    ]
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
        room: async (parent: { roomId: number; }, _args: any, _context: any, _info: any) => await prisma.room.findFirst({
            where: {
                id: Number(parent.roomId)
            }
        }),

        user: async (parent: { userId: number; }, _args: any, _context: any, _info: any) => await prisma.user.findFirst({
            where: {
                id: Number(parent.userId)
            }
        }),

        roomEventPresences: async (parent: { id: any; }, _args: any, _context: any, _info: any) => await prisma.roomEventPresence.findMany({
            where: {
                roomEventId: Number(parent.id)
            }
        })
    }
}