import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  providers: [AuthService, GoogleStrategy, FacebookStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
