import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Retorna uma String com uma breve descrição da aplicação.' })
  @ApiResponse({ status: 200, description: 'Descrição recebida com sucesso.'})
  @Get()
  getHello(): string {
    return this.appService.getMainPage();
  }
}
