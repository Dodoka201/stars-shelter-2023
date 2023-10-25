import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StarService } from './shared/star.service/star.service';
import { Star } from './shared/star/star';
import { ApiTags } from '@nestjs/swagger';

@Controller('stars')
@ApiTags('stars')
export class StarsController {
    constructor(private starService: StarService)
    {

    }

    @Get()
    async getAll() : Promise<Star[]>{
        return this.starService.getAll();
    }

    @Get(':id')
    async getByID(@Param('id') id : string) : Promise<Star>{
        return this.starService.getById(id);
    }

    @Post()
    async create(@Body() star: Star) : Promise<Star>{
        return this.starService.create(star);
    }

    @Put(':id')
    async update(@Param('id') id : string, @Body() star: Star) : Promise<Star>{
        return this.starService.update(id, star);
    }

    @Delete(':id')
    async delete(@Param('id') id : string){
        this.starService.delete(id);
    }
}