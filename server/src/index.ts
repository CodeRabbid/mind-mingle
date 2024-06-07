import express from "express";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { UserResolver } from "./UserResolver";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import cors from "cors";

(async () => {
  const app = express();
  app.get("/", (_req, res) => {
    res.send("hello");
  });
  app.use(
    cors({
      credentials: true,
      origin: "https://studio.apollographql.com",
    })
  );
  await AppDataSource.initialize();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: [
        "https://studio.apollographql.com",
        "http://localhost:4000/graphql",
      ],
    },
  });
  app.listen(4000, () => {
    console.log("express server started");
  });
})();
