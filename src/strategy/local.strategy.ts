/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local';
import { AuthService } from "src/auth/auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    constructor (private authService:AuthService){
        super();
    }
    validate(username:string,password:string){
        console.log('inside local strategy');
        const user = this.authService.validateUser({username,password});
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}