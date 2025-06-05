/**
 * Este arquivo contém a rota para Cliente e a manipulação de todas as rotas HTTP
 * (GET, POST, PUT e DELETE) para realizar a manipulação dos dados no BD (CREATE,
 * READ, UPDATE e DELETE).
 */

// Importar os módulos
const express = require('express');
const routes = express.Router();
const db = require('../db/connect');


// ---------------------------------------------------------------------------------
// GET (Read)
// Rota para obter (Read) os dados no BD
routes.get('/', async (req, res) => {
  // Realiza a consulta no banco (usando uma query SQL) buscando
  // os dados da tabela
  const result = await db.query('SELECT * FROM cliente');

  // Responde com os dados da consulta
  res.status(200).json(result.rows);
});


// ---------------------------------------------------------------------------------
// POST (Create)
// Rota para criar (Create) novos valores no BD
routes.post('/', async (req, res) => {
  // Extrair os valores recebidos como parâmetros
  const { nome, email, telefone, endereco, cidade, uf } = req.body;

  // Verifica se todos os valores foram informados pelo usuário
  if (!nome || !email || !telefone || !endereco || !cidade || !uf) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  // Constrói a query de consulta SQL
  const sql = `
    INSERT INTO cliente (nome, email, telefone, endereco, cidade, uf)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [nome, email, telefone, endereco, cidade, uf];

  // Executa a operação no banco de dados
  const result = await db.query(sql, valores);

  // Retorna com os valores inseridos no banco e o código 201
  res.status(201).json(result.rows[0]);
});


// ---------------------------------------------------------------------------------
// PUT (Update)
// Rota para atualizar (Update) valores no BD
routes.put('/:id', async (req, res) => {
  // Obtém o id inforado pelo usuário nos parâmetros da URL
  const { id } = req.params;
  
  // Verifica se realmente o id foi informado
  if (!id) {
    return res.status(400).json({ mensagem: 'O id precisa ser informado' });
  }

  // Agora obtém os valores para atualiação
  const { nome, email, telefone, endereco, cidade, uf } = req.body;

  // Verifica se todos os valores foram informados pelo usuário
  if (!nome || !email || !telefone || !endereco || !cidade || !uf) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  // Constrói a query de consulta SQL que ira atualizar os dados no banco
  const sql = `
    UPDATE cliente
    SET nome = $1, email = $2, telefone = $3, 
      endereco = $4, cidade = $5, uf = $6
    WHERE id = $7
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [nome, email, telefone, endereco, cidade, uf, id];

  // Executa a operação no banco de dados
  const result = await db.query(sql, valores);

  // Caso não tenha resposta na operação do banco de dados, retorna um erro
  // informando que o cliente não foi encontrado
  if (result.rows.length === 0) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
  }

  // Caso tenha chegado até aqui, devolve os dados atualizados
  res.status(200).json(result.rows[0]);
});


// ---------------------------------------------------------------------------------
// DELETE (Delete)
// Rota para excluir (Delete) valores do BD
routes.delete('/:id', async (req, res) => {
  // Obtém o id inforado pelo usuário nos parâmetros da URL
  const { id } = req.params;

  // Verifica se realmente o id foi informado
  if (!id) {
    return res.status(400).json({ mensagem: 'O id precisa ser informado' });
  }

  // Constrói a query de consulta SQL que ira atualizar os dados no banco
  const sql = `
    DELETE FROM cliente
    WHERE id = $1 
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [id];

  // Executa a operação no banco de dados
  const result = await db.query(sql, valores);

  // Caso não tenha resposta na operação do banco de dados, retorna um erro
  // informando que o cliente não foi encontrado
  if (result.rows.length === 0) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
  }

  // Caso tenha chegado até aqui, devolve informando que o cliente foi excluído
  res.status(200).json({ mensagem: `Cliente com ID ${id} foi excluído com sucesso.` });
});


// ---------------------------------------------------------------------------------
// Exportar o módulo com as rotas
module.exports = routes;