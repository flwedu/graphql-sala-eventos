const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers/resolvers");

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schemas/schema.graphql"),
  resolvers,
});

server.start(() => console.log("server is running on localhost:4000"));
