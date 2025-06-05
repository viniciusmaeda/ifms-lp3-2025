# Aplicação Web Node.js (API Rest)

### Descrição
Esta aplicação compreende uma aplicação Web com o Node.JS conhecido como Aplicação API Rest. A aplicação irá realizar as 4 operações de um CRUD no banco de dados.
C - Create -> utilizará o médoto HTTP 'post'
R - Read -> utilizará o método HTTP 'get'
U - Update -> utilizará o método HTTP 'put'
D - Delete -> utilizará o método HTTP 'delete'

## Pacotes necessários para rodar essa aplicação

### Express
O **express** será responsável por criar o aplicativo Web e gerenciar as rotas da aplicação.

### pg
O módulo **pg** (PostgreSQL) será responsável por realizar a conexão com o banco de dados PostgreSQL.

### dotenv
O módulo **dotenv** será responsável para não expor os dados da conexão com o banco de dados. Isso é importante para não informar dados como endereço do servidor do banco de dados, login e senha. As credenciais para a conexão com o banco de dados serão armazenados num arquivo separado.

### Intalação dos módulos
Para instalar os módulos acima, execute o seguinte comando.
```
npm install express pg dotenv
```

### Projeto a partir do GitHub
Se você baixou o projeto diretamente do GitHub, execute o comando abaixo que ele irá instalar automaticamente as dependência (pacotes do Node.JS) utilizadas neste projeto.
```
npm install
```

## Configuração das chaves (variáveis) do Banco de Dados e da Aplicação

Para que sua aplicação funcione, você precisará utilizar um arquivo chamado ".env". Este arquivo deverá conter as chaves para a conexão com o Banco de Dados e as configurações básicas da aplicação.

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`.

Depois, preencha os valores reais de acesso ao banco de dados e porta da aplicação.

## Testar as rotas da aplicação
Você poderá testar as requisições HTTP (GET, POST, PUT e DELETE) com o [Insominia](https://insomnia.rest/), [Postman](https://www.postman.com/) ou qualquer outro software semelhante. O VSCode possui algumas extesão que podem ser utilizadas para realizar os testes, como o **Thunder Client**.

