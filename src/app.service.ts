import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMainPage(): string {
    return '⭐ Stars Shelter!\nBem vindo ao API.\nA página inicial ainda está em construção.\nVocê pode acessar http://localhost:3000/api/ para ter acesso ao Swagger.';
  }
}
