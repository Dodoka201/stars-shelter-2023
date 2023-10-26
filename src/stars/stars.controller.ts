import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StarService } from './shared/star.service/star.service';
import { Star } from './shared/star/star';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('stars')
@ApiTags('stars')
export class StarsController {
    constructor(private starService: StarService){}

    @ApiOperation({ summary: 'Retorna todas os clientes cadastrados. (Necessita token de autenticação)' })
    @ApiResponse({ status: 200, description: 'Registros recebidos com sucesso.'})
    @ApiResponse({ status: 401, description: 'Token de Usuário não registrado. Faça o Login utilizado /auth/login.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Star[]>{
        try {
            return this.starService.getAll();
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.BAD_REQUEST,
              error: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.',
            }, HttpStatus.BAD_REQUEST, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Retorna apenas os dados do cliente referenciado pelo Id. (Necessita token de autenticação)' })
    @ApiResponse({ status: 200, description: 'Registros recebidos com sucesso.'})
    @ApiResponse({ status: 401, description: 'Token de Usuário não registrado. Faça o Login utilizado /auth/login.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getByID(@Param('id') id : string) : Promise<Star>{
        try {
            return await this.starService.getById(id);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.NOT_FOUND,
              error: 'Id não encontrado no banco de dados.',
            }, HttpStatus.NOT_FOUND, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Cria e armazena um novo cliente no banco de dados. (Necessita token de autenticação)' })
    @ApiResponse({ status: 200, description: 'Registro efetuado com sucesso.'})
    @ApiResponse({ status: 401, description: 'Token de Usuário não registrado. Faça o Login utilizado /auth/login.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() star: Star) : Promise<Star>{
        try {
            return this.starService.create(star);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.BAD_REQUEST,
              error: 'Corpo inválido, verifique com atenção os campos e a estrutura.',
            }, HttpStatus.BAD_REQUEST, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Atualiza os dados de um cliente referenciado pelo Id. (Necessita token de autenticação)' })
    @ApiResponse({ status: 200, description: 'Registros atualizados com sucesso.'})
    @ApiResponse({ status: 401, description: 'Token de Usuário não registrado. Faça o Login utilizado /auth/login.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id : string, @Body() star: Star) : Promise<Star>{
        try {
            return await this.starService.update(id, star);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.NOT_FOUND,
              error: 'Id não encontrado no banco de dados.',
            }, HttpStatus.NOT_FOUND, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Elimina os dados de um cliente referenciado pelo Id do banco de dados. (Necessita token de autenticação)' })
    @ApiResponse({ status: 200, description: 'Registros excluídos com sucesso.'})
    @ApiResponse({ status: 401, description: 'Token de Usuário não registrado. Faça o Login utilizado /auth/login.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id : string){
        try {
            return await this.starService.delete(id);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.NOT_FOUND,
              error: 'Id não encontrado no banco de dados.',
            }, HttpStatus.NOT_FOUND, {
              cause: error
            });
        }
    }
}