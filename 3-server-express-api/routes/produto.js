/**
 * Este arquivo contém a rota para Produto e a manipulação de todas as rotas HTTP
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
  const result = await db.query('SELECT * FROM produto');

  // Responde com os dados da consulta
  res.status(200).json(result.rows);
});


// ---------------------------------------------------------------------------------
// POST (Create)
// Rota para criar (Create) novos valores no BD
routes.post('/', async (req, res) => {
  // Extrair os valores recebidos como parâmetros
  const { nome, marca, preco, peso } = req.body;

  // Verifica se todos os valores foram informados pelo usuário
  if (!nome || !marca || !preco || !peso) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  // Constrói a query de consulta SQL
  const sql = `
    INSERT INTO produto (nome, marca, preco, peso)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [nome, marca, preco, peso];

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
  const { nome, marca, preco, peso } = req.body;

  // Verifica se todos os valores foram informados pelo usuário
  if (!nome || !marca || !preco || !peso) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  // Constrói a query de consulta SQL que ira atualizar os dados no banco
  const sql = `
    UPDATE produto
    SET nome = $1, marca = $2, preco = $3, peso = $4
    WHERE id = $5
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [nome, marca, preco, peso, id];

  // Executa a operação no banco de dados
  const result = await db.query(sql, valores);

  // Caso não tenha resposta na operação do banco de dados, retorna um erro
  // informando que o produto não foi encontrado
  if (result.rows.length === 0) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
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
    DELETE FROM produto
    WHERE id = $1 
    RETURNING *
  `;

  // Valores que serão usados na consulta SQL
  const valores = [id];

  // Executa a operação no banco de dados
  const result = await db.query(sql, valores);

  // Caso não tenha resposta na operação do banco de dados, retorna um erro
  // informando que o produto não foi encontrado
  if (result.rows.length === 0) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  // Caso tenha chegado até aqui, devolve informando que o produto foi excluído
  res.status(200).json({ mensagem: `Produto com ID ${id} foi excluído com sucesso.` });
});


// ---------------------------------------------------------------------------------
// Exportar o módulo com as rotas
module.exports = routes;