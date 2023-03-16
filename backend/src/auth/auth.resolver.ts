import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';
import { loginResult } from './dto/auth.output';
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => loginResult)
  async register(
    @Args('input') input: AuthRegisterInput,
  ): Promise<loginResult> {
    return this.authService.register(input);
  }

  @Query(() => loginResult)
  async login(@Args('input') input: AuthLoginInput): Promise<loginResult> {
    return this.authService.login(input);
  }
}
