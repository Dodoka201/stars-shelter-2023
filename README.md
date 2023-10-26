#⭐ Stars Shelter

## Descrição

Stars Shelter é um projeto de avaliação para a equipe de desenvolvimento Global Hits.
O Projeto consiste na elaboração de um CRUD (Create, Read, Update, Delete) para uma entidade utilizando o framework NestJS.

A escolha do tema foi um banco de dados de possíveis atores e figurantes para serem facilmente contratados por empresas clientes interessadas.

A aplicação fornece:
* Endpoint para Cadastrar Clientes.
* Endpoint para Listar todos os Clientes.
* Endpoint para Consultar Clientes.
* Endpoint para Atualizar Clientes.
* Endpoint para Excluir Clientes.
* Integração com um Banco de Dados não relacional (MongoDB).

_O banco de dados MongoDB foi escolhido pela facilidade de implementação e ampla documentação nas extensões recomendadas pela documentação do NestJS. A hospedagem online foi escolhida por conta da facilidade e portabilidade do serviço._

A Aplicação também fornece uma camada de segurança e autenticação usando Login e Senha.
* Endpoint para Cadastrar Usuários.
* Endpoint para Listar todos os Usuários.
* Endpoint para Consultar Usuários.
* Endpoint para Atualizar Usuários.
* Endpoint para Excluir Usuários.

E para perpetuar a autenticação, a aplicação também fornece:
* Endpoint para Efetuar Login.

Utilizando a biblioteca de autenticação @nestjs/passport. Foi implementado um método de autenticação por cadastro, recebendo um token, que pode ser usado no Header da solicitação ao acessar o banco de dados para receber os dados dos Clientes.

## Instalação

### Primeiros Passos
Certifique-se de ter instalado as principais ferramentas para o uso:
* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/) - _Versão Mínima: 18.18.2_
* [NestJS](https://nestjs.com/) - _Versão Mínima: 10.1.18_

### Método de Instalação: Git Clone
Vamos começar clonando o repositório para um diretório local.

Em seu console, escolha um diretório e execute o comando:
```bash
$ git clone https://github.com/Dodoka201/stars-shelter-2023.git
```
Após a instalação, acesse o diretório com seu IDE preferido.

### Instalando Dependências

Após acessar o diretório com seu IDE, você precisa instalar as dependências, o seguinte comando pode ser usado:
```bash
npm install
```

Assim que confirmado, podemos prosseguir para o próximo passo.

## Executando o CRUD
Com as dependências instaladas, e o acesso de seu IDE ao diretório, utilizando o terminal, utilize o seguinte comando:

```bash
npm run start
```
Se tudo correu certo, a partir desse momento, você tem a aplicação rodando por padrão no endereço "localhost" utilizando a porta 3000 (padrão).
Você consegue acessar a aplicação a partir do endereço: http://localhost:3000/

## Acessando a Documentação a partir do Swagger
A documentação da aplicação pode ser acessada através da extensão do Swagger, para acessar é bem simples, apenas acesse a rota /api/ dentro desse mesmo endereço.

http://localhost:3000/api/

## Entendendo a documentação
Toda área da documentação está separada em 3 Categorias:
* Stars
* Usuários
* Autenticação

### Stars
É o objeto que carrega as informações dos clientes cadastrados no sistema, o objeto carrega informações pessoais sensíveis que devem ser protegidas por autenticação. Por isso, o request só pode ser feito com um "Bearer Token" gerado a partir do Login de um usuário.
> [!IMPORTANT]
> A classe Stars só pode ser acessada com um Token de autenticação. É recomendado usar um gerenciador de API externo como [Postman](https://www.postman.com/) para conseguir enviar fácilmente o token de autenticação no cabeçalho da requisição.

### Usuário
É o objeto que carrega os dados dos usuários que se cadastram e fornece o acesso para gerar o Token de autenticação nescessário para acessar o banco de dados com os dados dos clientes (Stars).
Por fins de demonstração, o acesso aos usuários e senhas não é criptografado. A utilização da biblioteca `node.bcrypt.js` foi cogitada, porém, fugia ao escopo da demonstração.

### Autenticação
É um endpoint único que recebe um Body com dois campos: email e senha. O retorno dessa autenticação é um "Bearer Token" com duração limitada, que quando adicionada ao Header de uma solicitação, permite acessar o banco de dados.

Para autenticar você pode utilizar o usuário admin padrão.
```bash
{
  "email": "admin@admin.com.br",
  "password": "admin"
}
```
> [!IMPORTANT]
> O Token de autenticação tem duração de 5 Minutos, após esse período, ele precisa ser gerado novamente por meio do Endpoint de autenticação.
