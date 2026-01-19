import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('auth/login') // renders views/index.ejs
  root() {
    return { message: 'Hello from NestJS + EJS!' };
  }

  @Get('dashboard')
  @Render('page/dashboard/dashboard')
  dashboard() {
    return { usersCount: 120 };
  }

  @Get("abcd")
  getHello2(): string {
    return "HAh!"
  }
}
