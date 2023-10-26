import { Injectable } from '@nestjs/common';
import { Star } from '../star/star';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StarService {
    
    constructor(@InjectModel('Star') private readonly starModel: Model<Star>){ }

    async create(star: Star){
        const createdStar = new this.starModel(star);
        return await createdStar.save();
    }

    async getAll(){
        return await this.starModel.find().exec();
    }

    async getById(id: string){
        return await this.starModel.findById(id).exec();
    }

    async update(id: string, star: Star){
        await this.starModel.updateOne({ _id: id}, star).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.starModel.deleteOne({_id: id}).exec();
    }
}