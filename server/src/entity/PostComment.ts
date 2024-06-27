import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@ObjectType()
@Entity("post_comments")
export class PostComment extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field()
  @ManyToOne(() => User)
  @JoinColumn()
  author: User;

  @Field(() => Post)
  @ManyToOne(() => Post)
  @JoinColumn()
  post: Post;

  @Field(() => [PostComment])
  @OneToMany(
    () => PostComment,
    (postComment: PostComment) => postComment.postComment
  )
  @JoinColumn()
  comments: PostComment[];

  @Field(() => PostComment)
  @ManyToOne(() => PostComment)
  @JoinColumn()
  postComment: PostComment;
}
