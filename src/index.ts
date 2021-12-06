import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { dateTimeResolver, roomEventPresenceResolver, roomEventsResolver, roomResolver, usersResolver } from "./resolvers"
import schema from "./schemas/schema";

export const prisma = new PrismaClient();

const typeDefs = [schema];
const resolvers = [dateTimeResolver, usersResolver, roomResolver, roomEventsResolver, roomEventPresenceResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀️ Server is running at ${url} 🚀️`)
})
