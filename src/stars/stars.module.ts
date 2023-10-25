import { Module } from '@nestjs/common';
import { StarsController } from './stars.controller';
import { StarService } from './shared/star.service/star.service';
import { StarSchema } from './schemas/star.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Star', schema: StarSchema }])
    ],
    controllers: [StarsController],
    providers: [StarService],
})
export class StarsModule {}
