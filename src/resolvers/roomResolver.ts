import { Room } from "@prisma/client";
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
<<<<<<< HEAD
        createRoom: async (_, { room }) => {
            const { createdByUserId, ...roomsProps } = room
            const createdRoom = await prisma.room.create({
                data: { ...roomsProps, userId: Number(createdByUserId) } as Room
            })
            return createdRoom
        }
=======
>>>>>>> a307cc19980cf5b996d0fcbfcb2f26b4fd6f860e
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