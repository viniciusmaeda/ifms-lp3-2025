/*
Servidor HTTP que irá responder com código HTML
*/

// importar o módulo http
const http = require('http');

// Definir as configurações do servidor
const hostname = '127.0.0.1';
port = 3000;

// Criar o servidor
const server = http.createServer((req, res) => {
  // define as configuração do cabeçalho da resposta
  res.statusCode = 200; // indica sucesso
  // define o tipo de resposta
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // define o código html
  const codigoHtml = `
    <h1>Servidor HTTP rodando com Node.js</h1>

    <p>Este é um servidor HTTP que foi criado com o módulo http do Node.js</p>
    <p>O servidor está rodando na porta 3000.</p>

    <p>Lista de compras</p>
    <ul>
      <li>arroz</li>
      <li>feijão</li>
      <li>óleo</li>
      <li>macarrão</li>
      <li>cebola</li>
    </ul>
  `;

  // adiciona o código html
  res.write(codigoHtml);

  // enviar o conteúdo
  res.end();
});

// iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});