import { prisma } from "..";

export default {
    Query: {

        //@ts-ignore
        presencesFromRoomEvent: async (_, { roomEventId }) => prisma.roomEventPresence.findMany({
            where: {
                roomEventId: roomEventId
            }
        }),
        //@ts-ignore
        presencesFromUser: async (_, { userId }) => prisma.roomEventPresence.findMany({
            where: {
                userId: userId
            }
        })
    },
    Mutation: {

    }
}