import { Room } from "@prisma/client";
import { prisma } from "..";

export default {
    Query: {
        //@ts-ignore
        roomsFromUser: async (_, { userId }) => await prisma.room.findMany({
            where: {
                userId: userId
            }
        }),
        //@ts-ignore
        roomById: async (_, { id }) => await prisma.room.findFirst({
            where: {
                id: id
            }
        })
    },

    Mutation: {
        //@ts-ignore
        createRoom: async (_, { room }) => {
            const { createdByUserId, ...roomsProps } = room
            const createdRoom = await prisma.room.create({
                data: { ...roomsProps, userId: Number(createdByUserId) } as Room
            })
            return createdRoom
        }
    },
};