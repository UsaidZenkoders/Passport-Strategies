import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'Info from google',
      user: req.user,
    };
  }
  fbLogin(req) {
    if (!req.user) {
      return 'No user from facebook';
    }
    return {
      message: 'Info from facebook',
      user: req.user,
    };
  }
}
