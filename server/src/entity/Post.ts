import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
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
  content: string;

  @Field()
  @OneToOne(() => User)
  @JoinColumn()
  author: User;
}
