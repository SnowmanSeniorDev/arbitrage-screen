import {
  ConflictException,
  InternalServerErrorException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from '../utils/services';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly helperService: HelperService,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { email, password } = createUserInput;
    const secPwd = await this.helperService.pwdHash(password);
    const user = this.userRepository.create({ email, password: secPwd });
    try {
      await this.userRepository.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('User was created by same email');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }

  async updateUserEmailVerify(email: string): Promise<void> {
    const user = await this.findOne(email);
    await this.userRepository.update(user.id, { isEmailVerified: true });
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
}
