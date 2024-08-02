import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Initiates Facebook OAuth2 login flow
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleauthRedirect(@Req() req) {
    // Handles Facebook OAuth2 callback
    return this.authService.googleLogin(req);
  }
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req) {
    // Initiates Facebook OAuth2 login flow
  }

  @Get('/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthredirect(@Req() req) {
    // Handles Facebook OAuth2 callback
    return this.authService.fbLogin(req);
  }
}
