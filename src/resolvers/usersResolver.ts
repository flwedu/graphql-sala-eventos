import { User } from "@prisma/client";
import UserService from "../service/userService";

export default {
  Query: {
    users: async () => await UserService.listAll({}),
    //@ts-ignore
    user: async (_, { id }) => await UserService.findById(id)
  },

  Mutation: {
    //@ts-ignore
    createUser: async (_, userData: User) => await UserService.create(userData),
  },
};
