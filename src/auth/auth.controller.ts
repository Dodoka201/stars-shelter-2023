import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './shared/auth.service';

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private authService: AuthService){ }

    @ApiOperation({ summary: 'Endpoint para afetuar o Login na aplicação.' })
    @ApiResponse({ status: 201, description: 'Token de Autenticação gerado com sucesso.'})
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any){
        return this.authService.login(req.user);
    }
}