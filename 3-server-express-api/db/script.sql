-- Usar esse script no PostgreSQL (pgAdmin) para criar as tabelas no PostgreSQL
-- O arquivo DER.png contém o diagrama deste banco de dados

-- Nome do banco de dados: meuapp
CREATE database meuapp;

-- Criação da tabela produto
CREATE TABLE produto (
    id serial PRIMARY KEY,
    nome varchar(100),
    marca varchar(100),
    preco decimal(8,2),
    peso decimal(8,2)
);

-- Criação da tabela cliente
CREATE TABLE cliente (
    id serial PRIMARY KEY,
    nome varchar(100),
    email varchar(100),
    telefone varchar(11),
    endereco varchar(255),
    cidade varchar(100),
    uf varchar(2)
);

