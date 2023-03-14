import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepositorry: Repository<User>
  ){}
  async create(createUserInput: CreateUserInput) {
    const user = this.userRepositorry.create({
      email: createUserInput.email,
      password: createUserInput.password,
    })
    await this.userRepositorry.save(user)
    const count = await this.userRepositorry.count()
    console.log('count: ', count)
    return user
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
