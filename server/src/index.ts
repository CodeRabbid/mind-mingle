import express from "express";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { UserResolver } from "./UserResolver";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";

(async () => {
  const app = express();
  app.get("/", (_req, res) => {
    res.send("hello");
  });
  await AppDataSource.initialize();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("express server started");
  });
})();
