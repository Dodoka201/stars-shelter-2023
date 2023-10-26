import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserService } from './shared/user.service/user.service';
import { User } from './shared/user/user';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private userService: UserService){}

    @ApiOperation({ summary: 'Retorna todas os usuários cadastrados na aplicação.' })
    @ApiResponse({ status: 200, description: 'Registros dos usuários recebidos com sucesso.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @Get()
    async getAll() : Promise<User[]>{
        try {
            return this.userService.getAll();
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.BAD_REQUEST,
              error: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.',
            }, HttpStatus.BAD_REQUEST, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Retorna um usuário referenciado pelo Id cadastrado na aplicação.' })
    @ApiResponse({ status: 200, description: 'Registros do usuário recebidos com sucesso.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @Get(':id')
    async getByID(@Param('id') id : string) : Promise<User>{
        try {
            return await this.userService.getById(id);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.NOT_FOUND,
              error: 'Id não encontrado no banco de dados.',
            }, HttpStatus.NOT_FOUND, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Registra um novo usuário na aplicação.' })
    @ApiResponse({ status: 200, description: 'Registros do usuário cadastrados com sucesso.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @Post()
    async create(@Body() user: User) : Promise<User>{
        try {
            return this.userService.create(user);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.BAD_REQUEST,
              error: 'Corpo inválido, verifique com atenção os campos e a estrutura.',
            }, HttpStatus.BAD_REQUEST, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Atualiza os dados de um usuário cadastrado na aplicação, referenciado pelo Id.' })
    @ApiResponse({ status: 200, description: 'Dados do usuário atualizado com sucesso.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @Put(':id')
    async update(@Param('id') id : string, @Body() user: User) : Promise<User>{
        try {
            return await this.userService.update(id, user);
          } catch (error) { 
            throw new HttpException({
              status: HttpStatus.NOT_FOUND,
              error: 'Id não encontrado no banco de dados.',
            }, HttpStatus.NOT_FOUND, {
              cause: error
            });
        }
    }

    @ApiOperation({ summary: 'Exclui um usuário cadastrado referenciado pelo Id na aplicação.' })
    @ApiResponse({ status: 200, description: 'Registros dos usuários excluídos com sucesso.'})
    @ApiResponse({ status: 500, description: 'Problema com o banco de dados MongoDB, entre em contato com o administrador.'})
    @Delete(':id')
    async delete(@Param('id') id : string){
        try {
            this.userService.delete(id);
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