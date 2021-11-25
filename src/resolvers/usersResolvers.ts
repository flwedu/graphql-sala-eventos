import { prisma } from "..";

export default {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_: any, { ...id }) => {

      return await prisma.user.findUnique({ where: id })

    },
  },

  Mutation: {
    createUser: (_: any, userData: any) => prisma.user.create({ data: userData }).then(created => { return created }),
  },
};
