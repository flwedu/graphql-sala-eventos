import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import usersResolver from "./resolvers/usersResolver";

export const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schemas/schema.graphql"),
  resolvers: [usersResolver],
});

server.start(() => console.log("server is running on localhost:4000"));
