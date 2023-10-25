import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './shared/auth.service';
import { LocalStategy } from './shared/auth.local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { jwtConstants } from './shared/constants';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '300s' },
        })
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStategy,
        JwtStrategy
    ],
})
export class AuthModule { }
