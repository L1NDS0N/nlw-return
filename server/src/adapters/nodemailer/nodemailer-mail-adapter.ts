import { SendMailData, MailAdapter } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ff38717b0304ea',
    pass: '456e8167fb2582',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: '"Feedget" <oi@feedget.com>',
      to: 'Lindson França <contato@lindson.com>',
      subject,
      html: body,
    });
  }
}
