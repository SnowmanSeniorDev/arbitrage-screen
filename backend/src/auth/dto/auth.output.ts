import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class loginResult {
  @Field(() => String, {nullable: true})
  authToken: string;
}
