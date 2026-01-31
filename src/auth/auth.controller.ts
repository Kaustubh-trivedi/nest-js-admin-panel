import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get("login")
    @Render('auth/login')
    getLoginPage() {
        console.log("TRYING TO GET LOGIN PAGE.")
        return {}
    }

    @Post('/login')
    postUser(@Req() req: Request, @Res() res: Response) {
        req.session.user = { id: 1, email: 'absz' }
        const burl = req.query.burl as string

        if (burl) {
            return res.redirect(`/${burl}`);
        }

        return res.redirect('/dashboard');
    }


}