// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotasCarro = express.Router();

// usado para expor a pasta public
const path = require('path');

// Middleware para servir arquivos estáticos da pasta 'public'
rotasCarro.use(express.static(path.join(__dirname, 'public')));


// GET
// rota para acesar o método GET
rotasCarro.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'pages', 'carro.html'));
});


// exportar toda a configuração das rotas
module.exports = rotasCarro;