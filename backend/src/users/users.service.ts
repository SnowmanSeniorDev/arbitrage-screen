import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly userRepositorry: UsersRepository,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { email, password } = createUserInput;
    return this.userRepositorry.createUser(email, password);
  }

  async findOne(email: string): Promise<User> {
    return this.userRepositorry.findOne({ where: { email } });
  }
}
