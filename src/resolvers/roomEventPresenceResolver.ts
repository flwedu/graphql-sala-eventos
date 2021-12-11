import { RoomEventPresence } from "@prisma/client";
import { prisma } from "..";

export default {
    Query: {
        roomEventPresence: async (_parent: any, args: { id: number; }, _context: any, _info: any) => await prisma.roomEventPresence.findFirst({
            where: {
                id: args.id
            }
        })
    },
    Mutation: {

        // createRoomEventPresence: async (_parent: any, args: { roomEventPresence: RoomEventPresence }, _context: any, _info: any) => await prisma.roomEventPresence.create({
        //     data: {
        //         ...args.roomEventPresence
        //     }
        // }),

        // deleteRoomEventPresence: async (_parent: any, args: { id: number }, _context: any, _info: any) => await prisma.roomEventPresence.delete({
        //     where: {
        //         id: args.id,
        //     }
        // })

    },

    RoomEventPresence: {
        user: async (parent: { userId: number; }, _args: any, _context: any, _info: any) => await prisma.user.findFirst({
            where: {
                id: parent.userId
            }
        }),
        roomEvent: async (parent: { roomEventId: number; }, _args: any, _context: any, _info: any) => await prisma.roomEvent.findFirst({
            where: {
                id: parent.roomEventId
            }
        })
    }
}