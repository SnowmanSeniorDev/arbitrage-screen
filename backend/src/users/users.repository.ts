import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UsersRepository extends Repository<User> {
  async createUser(email, password): Promise<User> {
    const user = this.create({ email, password });
    try {
      await this.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('User was created by same email');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }
}
