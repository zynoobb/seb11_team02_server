import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class Friend {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String, { nullable: true })
  id: string;

  @Column()
  @Field(() => String, { nullable: true })
  opponentId: string;

  @JoinColumn()
  @ManyToOne(() => User)
  //@Field(() => User)
  user: User;

  @Column({ default: false })
  @Field(() => Boolean, { nullable: true })
  isSuccess: boolean;

  @CreateDateColumn()
  //@Field(() => Date)
  createAt: Date;
}
