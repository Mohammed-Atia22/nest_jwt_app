/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from 'src/strategy/local.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret:'abc123',
      signOptions:{expiresIn:'1h'}
    })
  ],
  exports:[AuthService],
  controllers: [AuthController],
  providers: [AuthService,localStrategy,JwtStrategy]
})
export class AuthModule {}
