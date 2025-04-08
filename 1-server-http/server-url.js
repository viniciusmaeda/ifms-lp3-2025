/**
 * Servidor HTTP que irá manipular os parâmetros passados pela url
 * URL que será utilizada para enviar os parâmetros para o servidor
 * http://127.0.0.1:3000/?nome=Vinicius&sobrenome=Maeda
 */

// importtação dos pacotes
const http = require('http');
const url = require('url');

// Definir as configurações do servidor
const hostname = '127.0.0.1';
port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  // define as configuração do cabeçalho da resposta
  res.statusCode = 200; // indica sucesso
  // define o tipo de resposta
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // html

  // extrair os parâmetros da url
  const query = url.parse(req.url, true).query;
  
  // extraindo os dados dos parâmetros
  const nome = query.nome;
  const sobreNome = query.sobrenome;

  // define o código html
  const codigoHtml = `
    <h3>Servidor HTTP que irá manipular os parâmetros passados pela url</h3>
    <p>O servidor irá extrair os parâmetros <b>nome</b> e <b>sobrenome</b> da url.</p>
    <p>Nome: ${nome}</p>
    <p>Sobrenome: ${sobreNome}</p>
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
