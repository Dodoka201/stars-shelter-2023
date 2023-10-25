import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StarService } from './shared/star.service/star.service';
import { Star } from './shared/star/star';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('stars')
@ApiTags('stars')
export class StarsController {
    constructor(private starService: StarService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Star[]>{
        return this.starService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getByID(@Param('id') id : string) : Promise<Star>{
        return this.starService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() star: Star) : Promise<Star>{
        return this.starService.create(star);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id : string, @Body() star: Star) : Promise<Star>{
        return this.starService.update(id, star);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id : string){
        this.starService.delete(id);
    }
}