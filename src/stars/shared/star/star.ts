import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class Star extends Document {
    @ApiProperty({
        example: 'Adrian Melanim',
        description: `Nome do cliente cadastrado. Será utilizado para disponibilização de Perfil, Propostas ou qualquer processo que exija informações do cliente cadastrado.`,
      })
    name: string;

    @ApiProperty({
        example: '28',
        description: `Idade do cliente cadastrado. Deverá ser preenchida com apenas números e será disponibilizada no Perfil do cliente.`,
      })
    age: number;

    @ApiProperty({
        example: '567 Birch Road, Riverside, FL 32222',
        description: `O endereço comercial do cliente cadastrado, possívelmente de sua agência. AVISO: Não preencher com dados pessoais do cliente.`,
      })
    adress: string;

    @ApiProperty({
        example: '4.5',
        description: `Avaliação interna colhida através do feedback da empresa contratante do cliente.`,
      })
    rating: number;

    @ApiProperty({
        example: 'true',
        description: `Parâmetro que define se o usuário é assinante do cadastro premium da aplicação.`,
      })
    premium: boolean;
}