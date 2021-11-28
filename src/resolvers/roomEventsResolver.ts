import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        roomEventsFromUser: async (_, { userId }) => prisma.roomEvent.findMany({
            where: {
                userId: userId
            }
        }),
        //@ts-ignore
        roomEventsFromRoom: async (_, { roomId }) => prisma.roomEvent.findMany({
            where: {
                roomId: roomId
            }
        }),

        roomEventsPublics: async () => prisma.roomEvent.findMany({
            where: {
                acess: "PUBLIC"
            }
        }),

        //@ts-ignore
        roomEventById: async (_, { roomEventId }) => prisma.roomEvent.findFirst({
            where: {
                id: roomEventId
            }
        }),
        //@ts-ignore
        roomEventsByAge: async (_, { age }) => prisma.roomEvent.findMany({
            where: {
                minimumAge: {
                    gt: age
                }
            }
        }),

    },

    Mutation: {

    }
}