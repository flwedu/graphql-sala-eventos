import { User } from "@prisma/client";
import { prisma } from "..";

export default class UserService {

    static async listAll({ size = 10 }) {
        return await prisma.user.findMany({
            take: size
        })
    }

    static async findById(userId: number) {
        return await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
    }

    static async create(data: User) {
        return await prisma.user.create({ data });
    }
}