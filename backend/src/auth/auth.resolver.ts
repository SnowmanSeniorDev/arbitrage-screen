import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';
import { LoginResult } from './dto/auth.output';
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Boolean)
  async register(@Args('input') input: AuthRegisterInput): Promise<boolean> {
    return this.authService.register(input);
  }

  @Query(() => LoginResult)
  async login(@Args('input') input: AuthLoginInput): Promise<LoginResult> {
    return this.authService.login(input);
  }
}
