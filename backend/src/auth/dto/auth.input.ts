import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthRegisterInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class AuthLoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
