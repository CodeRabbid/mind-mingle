import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { PostComment } from "./entity/PostComment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5430,
  username: "postgres",
  password: "postgres",
  database: "bloggeroo",
  synchronize: true,
  logging: false,
  entities: [User, Post, PostComment],
  migrations: [],
  subscribers: [],
});
