import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

export class HelperService {
  public readonly saltRounds = 10;

  getUuid(): string {
    return uuid();
  }

  async pwdHash(pwd: string): Promise<string> {
    return bcrypt.hash(pwd, this.saltRounds);
  }

  async pwdCompaire(pwd, encPwd): Promise<boolean> {
    return bcrypt.compare(pwd, encPwd);
  }
}
