// Projeto Node.js com o módulo HTTP

// importar o pacote http
const http = require('http');

// definir as configurações do servidor
hostname = '127.0.0.1'; // endereço IP local
port = 3000; // porta do servidor

// criar o servidor
const server = http.createServer((requisicao, resposta) => {
  // definir o cabeçalho da resposta
  resposta.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  resposta.write('Olá este é o meu primeiro servidor Node.js!\n');
  resposta.write('Ele está rodando na porta 3000.\n');
  resposta.write('Está utilizando o módulo http.\n');
  resposta.write('Toda alteração deve ser reiniciado o servidor.');

  // enviar a resposta
  resposta.end();
});

// iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
// Fazer uma requisição HTTP