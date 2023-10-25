import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('⭐ Stars Shelter - Documentação com Swagger')
  .setDescription(
    'Página criada com suporte da biblioteca Swagger, que descreve com muitos detalhes cada endpoint e estruturas presentes na aplicação. ',
  )
  .setVersion('1.0')
  .addTag('stars')
  .addTag('users')
  .addTag('auth')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
