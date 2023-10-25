import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class User extends Document {
    @ApiProperty({
        example: 'Marcus Leandro',
        description: `Nome do Usuário cadastrado.`,
      })
    name: string;

    @ApiProperty({
        example: 'email@provedor.com.br',
        description: `Endereço de Email do Usuário cadastrado.`,
      })
    email: string;

    @ApiProperty({
        example: 'Pa$$w0rD',
        description: `Senha do usuário para acessar os serviços.`,
      })
    password: string;
}