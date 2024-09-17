/* eslint-disable prettier/prettier */
import {  Controller, Post, UseGuards , Get , Req } from '@nestjs/common';
//import { AuthPayloadDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';
//import { AuthGuard } from '@nestjs/passport';
import { localGuard } from 'src/guards/local.guard';
import { JwtAuthGuard } from 'src/guards/jwt.guards';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('login')
    @UseGuards(localGuard)
    login(@Req() req:Request){
        return req.user
    }
    // login(@Body() authPayload:AuthPayloadDto){
    //     const user = this.authService.validateUser(authPayload);
    //     //if(!user) throw new HttpException('invalid credentials',401);
    //     return user;
    // }


    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req:Request){
        console.log('inside Auth controller status method');
        console.log(req.user)
        return req.user;
    }
}
