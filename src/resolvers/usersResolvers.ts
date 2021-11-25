import { prisma } from "..";

export default {
  Query: {
    users: async () => await prisma.user.findMany(),
  },

  Mutation: {
    createUser: (_: any, userData: any) => prisma.user.create({ data: userData }).then(created => { return created }),
  },
};
