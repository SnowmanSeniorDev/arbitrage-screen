import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';
import { loginResult } from './dto/auth.output';
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => loginResult)
  async register(@Args('input') input: AuthRegisterInput) {
    await this.authService.register(input);
    return  {
      authToken: "asdfa sd"
    }
  }

  @Query(() => loginResult)
  login(@Args('input') input: AuthLoginInput) {
    return this.authService.login(input);
  }
}
