import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import roomEventPresenceResolver from "./resolvers/roomEventPresenceResolver";
import roomEventsResolver from "./resolvers/roomEventsResolver";
import roomResolver from "./resolvers/roomResolver";
import usersResolver from "./resolvers/usersResolver";

export const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schemas/schema.graphql"),
  resolvers: [usersResolver, roomResolver, roomEventsResolver, roomEventPresenceResolver],
});

server.start(() => console.log("server is running on localhost:4000"));
