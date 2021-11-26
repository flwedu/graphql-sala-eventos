import { User } from "@prisma/client";
import UserService from "../service/userService";

export default {
  Query: {
    users: async () => await UserService.listAll({}),
    user: async (_: any, id: number) => await UserService.findById(id)
  },

  Mutation: {
    createUser: async (_: any, userData: User) => await UserService.create(userData),
  },
};
