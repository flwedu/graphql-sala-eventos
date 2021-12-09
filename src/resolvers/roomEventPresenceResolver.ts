import { RoomEventPresence } from "@prisma/client";
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

        createRoomEventPresence: async (_parent: any, args: { roomEventPresence: RoomEventPresence }, _context: any, _info: any) => await prisma.roomEventPresence.create({
            data: {
                ...args.roomEventPresence
            }
        }),

        deleteRoomEventPresence: async (_parent: any, args: { id: any }, _context: any, _info: any) => await prisma.roomEventPresence.delete({
            where: {
                id: args.id,
            }
        })

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