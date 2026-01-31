import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('auth/login') // renders views/index.ejs
  root(@Req() req:Request) {
    return { message: 'Hello from NestJS + EJS!' };
  }

  @Get('dashboard')
  @Render('page/dashboard/dashboard')
  dashboard(@Req() req: Request) {
    return {
      url: req.url,
    };
  }

  @Get('dashboard2')
  @Render('page/dashboard/dashboard2')
  dashboard2(@Req() req: Request) {
    return { url: req.url }
  }
}
