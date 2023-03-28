import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailservice: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendVerificationEmail(emailTo: string, token: string): Promise<void> {
    const template = './verification';
    const baseUrl = this.configService.get('app.baseUrl');
    const context = { baseUrl, token, emailTo };
    return this.mailservice.sendMail({
      to: emailTo,
      subject: 'verify your email address',
      template,
      context,
    });
  }
}
