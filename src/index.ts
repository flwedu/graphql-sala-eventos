import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import usersResolvers from "./resolvers/usersResolvers";

export const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schemas/schema.graphql"),
  resolvers: [usersResolvers],
});

server.start(() => console.log("server is running on localhost:4000"));
