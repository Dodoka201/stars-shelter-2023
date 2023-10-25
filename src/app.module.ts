import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarsModule } from './stars/stars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://brendok:iBYzDfcaQBEFB7Sp@starscluster.udhtbzo.mongodb.net/'), StarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
