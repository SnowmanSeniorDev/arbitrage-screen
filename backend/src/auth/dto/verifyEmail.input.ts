import { IsDefined, IsEmail, IsUUID } from 'class-validator';

export class VerifyEmailDto {
  @IsDefined()
  @IsUUID()
  id: string;

  @IsDefined()
  @IsEmail()
  email: string;
}
