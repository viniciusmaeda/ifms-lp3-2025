-- Criação da tabela produto
CREATE TABLE produto (
    id serial primary key,
    nome varchar(100),
    marca varchar(100),
    preco decimal(8,2),
    peso decimal(8,2)
);

-- Criação da tabela cliente
CREATE TABLE cliente (
    id serial primary key,
    nome varchar(100),
    email varchar(100),
    telefone varchar(11),
    endereco varchar(255),
    cidade varchar(100),
    uf varchar(2),
);