import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/google.strategy';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
