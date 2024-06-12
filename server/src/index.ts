import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { UserResolver } from "./UserResolver";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { User } from "./entity/User";
import { createAccessToken } from "./auth";

(async () => {
  const app = express();
  app.use(cookieParser());
  app.get("/", (_req, res) => {
    res.send("hello");
  });

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }
    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    // token is valid
    // we can send back an access token

    const user = await User.findOne({
      where: [{ id: payload.userId }],
    });

    if (user?.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }
    if (!user) {
      return res.send({ ok: false, accessToken: "" });
    }
    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  app.use(
    cors({
      credentials: true,
      origin: [
        "http://localhost:5173",
        "https://studio.apollographql.com",
        "http://localhost:4000/graphql",
      ],
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
    cors: false,
  });
  app.listen(4000, () => {
    console.log("express server started");
  });
})();
