import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { compare, hash } from "bcryptjs";

import { MyContext } from "./MyContext";
import { createAccessToken, createRefreshToken } from "./auth";
import { isAuth } from "./isAuth";
import { getConnection } from "typeorm";
import { verify } from "jsonwebtoken";
import { PostComment } from "./entity/PostComment";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    return `Your user Id is ${payload?.userId}`;
  }

  @Query(() => [Post])
  posts() {
    return Post.find();
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: MyContext) {
    const authorization = context.req.headers["authorization"];

    if (!authorization) {
      return null;
    }
    try {
      const token = authorization?.split(" ")[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne({
        where: {
          id: payload.userId,
        },
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addPost(
    @Arg("content", () => String) content: string,
    @Arg("subject", () => String) subject: string,
    @Ctx() { payload }: MyContext
  ) {
    if (payload) {
      const author = await User.findOne({
        where: { id: Number(payload.userId) },
      });
      if (author) {
        try {
          await Post.insert({
            subject,
            content,
            author,
          });
        } catch (err) {
          console.log(err);
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  @Mutation(() => Boolean)
  //   @UseMiddleware(isAuth)
  async addPostComment(
    @Arg("postId", () => Int) postId: number,
    @Arg("content", () => String) content: string
    // @Ctx() { payload }: MyContext
  ) {
    // if (payload) {
    //   const author = await User.findOne({
    //     where: { id: Number(payload.userId) },
    //   });
    //   if (author) {
    //  console.log(author)
    let postComment = new PostComment();
    postComment.content = content;

    const post = await Post.findOne({ where: { id: postId } });
    if (post) {
      await PostComment.insert({
        content,
        post,
      });
      return true;
    }

    return false;
  }

  @Mutation(() => Post)
  async getPost(@Arg("postId", () => String) postId: string) {
    try {
      const post = await Post.findOne({
        where: { id: Number(postId) },
        relations: {
          author: true,
          comments: true,
        },
      });
      return post;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Mutation(() => [PostComment])
  async getPostComments(@Arg("postId", () => Int) postId: number) {
    try {
      const post = await Post.findOne({
        where: { id: postId },
        relations: {
          comments: true,
        },
      });
      return post?.comments;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: MyContext) {
    res.cookie("jid", "", {
      httpOnly: true,
      path: "/refresh_token",
    });
    return true;
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, "tokenVersion", 1);

    return true;
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashedPassword,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("could not find user");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("wrong password");
    }

    res.cookie("jid", createRefreshToken(user), {
      httpOnly: true,
      path: "/refresh_token",
    });

    return {
      accessToken: createAccessToken(user),
      user,
    };
  }
}
