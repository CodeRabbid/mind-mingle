import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@ObjectType()
@Entity("postComment")
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
}
