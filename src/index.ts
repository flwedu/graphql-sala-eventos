import { PrismaClient } from "@prisma/client";
import path from "path";
import { ApolloServer } from "apollo-server";
import roomEventPresenceResolver from "./resolvers/roomEventPresenceResolver";
import roomEventsResolver from "./resolvers/roomEventsResolver";
import roomResolver from "./resolvers/roomResolver";
import usersResolver from "./resolvers/usersResolver";
import schema from "./schemas/schema";

export const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: [usersResolver, roomResolver, roomEventsResolver, roomEventPresenceResolver],
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`)
})
