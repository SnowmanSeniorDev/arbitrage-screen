import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class loginResult {
  @Field(() => String, { nullable: true })
  authToken: string;

  @Field(() => User, { nullable: true })
  user: User;
}
