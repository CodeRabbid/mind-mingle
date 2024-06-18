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

@ObjectType()
@Entity("posts")
export class Post extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  subject: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @ManyToOne(() => User)
  @JoinColumn()
  author: User;
}
