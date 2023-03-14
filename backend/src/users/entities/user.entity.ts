import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number

  @Column({type: 'varchar', length: 50})
  @Field(() => String)
  email: string;

  @Column({type: 'varchar', length: 100})
  @Field(() => String)
  password: string;

  @Column({type: 'boolean', default: true})
  @Field(() => Boolean)
  isDeleted: boolean;

  @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;
}
