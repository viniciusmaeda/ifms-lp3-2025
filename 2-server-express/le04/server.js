// Servidor Web que utiliza o módulo Express
// Implementação de um rotas
// Manipula arquivos disponibilizados na pasta public

// importação da biblioteca Express
const express = require('express')

// usado para expor a pasta public
const path = require('path');

// criação de um app Express
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;


// importação das rotas
const carroRotas = require('./src/routes/Carro');
const motoRotas = require('./src/routes/Moto');


// rota para a página inicial (mostra a página inicial)
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'src', 'pages', 'index.html'));
})

// gerenciamento das rotas do site
app.use('/carro', carroRotas);
app.use('/moto', motoRotas);


// rodar o servidor
app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}/`);
});