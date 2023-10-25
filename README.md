<p align="center">
   ⭐ Stars Shelter
</p>

## Descrição

Stars Shelter é um projeto de avaliação para a equipe de desenvolvimento Global Hits.
O Projeto consiste na elaboração de um CRUD (Create, Read, Update, Delete) para uma entidade utilizando o framework NestJS.

A escolha do tema foi um banco de dados de possíveis atores e figurantes para serem facilmente contratados por empresas clientes interessadas.

A aplicação fornece:
* Endpoints para Cadastrar Clientes.
* Endpoints para Listar todos os Clientes.
* Endpoints para Consultar Clientes.
* Endpoints para Atualizar Clientes.
* Endpoints para Excluir Clientes.
* Integração com um Banco de Dados não relacional (MongoDB).


A Aplicação também fornece uma camada de segurança e autenticação usando Login e Senha.
* Endpoints para Cadastrar Usuários.
* Endpoints para Listar todos os Usuários.
* Endpoints para Consultar Usuários.
* Endpoints para Atualizar Usuários.
* Endpoints para Excluir Usuários.

E para perpetuar a autenticação, a aplicação também fornece:
* Endpoints para Efetuar Login.

Utilizando a biblioteca de autenticação @nestjs/passport. Foi implementado um método de autenticação por cadastro, recebendo um token, que pode ser usado no Header da solicitação ao acessar o banco de dados para receber os dados dos Clientes.

## Instalação

```bash
$ git clone https://github.com/Dodoka201/stars-shelter-2023.git
```

## Executando o CRUD

```bash
# development
```
## Acessando Swagger

```bash
# development
```

## Fazendo Login

Json Body
```bash
{
  "email": "email@provedor.com.br",
  "password": "Pa$$w0rD"
}
```

Recolhendo o Token de Autenticação
O Token expira em 5 minutos.
