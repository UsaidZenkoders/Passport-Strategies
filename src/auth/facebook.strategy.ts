import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({

      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    // eslint-disable-next-line @typescript-eslint/ban-types
    done: VerifyCallback,
  ): Promise<any> {
    console.log(accessToken,refreshToken)
      try {
        console.log(profile)
      const { id, displayName } = profile;
      const user = {
        id,
        displayName,
      };
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
