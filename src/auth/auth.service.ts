/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from 'src/dto/auth.dto';

const fakeusers = [
    {
        id:1,
        username:'mohamed',
        password:'12345'
    },
    {
        id:2,
        username:'ahmed',
        password:'12345'
    }
]

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    validateUser({username,password}:AuthPayloadDto){
        const findUser = fakeusers.find((user)=> user.username === username);
        if(!findUser) return null;
        if(password === findUser.password){
            const {password,...user} = findUser;
            console.log(password)
            return this.jwtService.sign(user)
        }
    }
}
