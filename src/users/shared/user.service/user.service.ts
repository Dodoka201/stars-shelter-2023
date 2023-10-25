import { Injectable } from '@nestjs/common';
import { User } from '../user/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async create(star: User){
        const createdStar = new this.userModel(star);
        return await createdStar.save();
    }

    async getAll(){
        return await this.userModel.find().exec();
    }

    async getById(id: string){
        return await this.userModel.findById(id).exec();
    }

    async update(id: string, user: User){
        await this.userModel.updateOne({ _id: id}, user).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.userModel.deleteOne({_id: id}).exec();
    }
}