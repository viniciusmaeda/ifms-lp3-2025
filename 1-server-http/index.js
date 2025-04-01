// Projeto Node.js com o módulo HTTP

// importar o pacote http
const http = require('http');

// definir as configurações do servidor
hostname = '127.0.0.1'; // endereço IP local
port = 3000; // porta do servidor

// criar o servidor
const server = http.createServer((requisicao, resposta) => {
  // definir o cabeçalho da resposta
  resposta.writeHead(200, { 'Content-Type': 'text/plain' });

  // enviar a resposta
  resposta.end('Hello World');
});

// iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});


