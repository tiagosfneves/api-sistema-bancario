create database api_sistema_bancario;

create table usuarios (
	id serial primary key,
  nome varchar(50),
  email varchar(60) unique,
  senha varchar(255)
);

create table categorias (
	id serial primary key,
  descricao varchar(255)
);

create table transacoes (
	id serial primary key,
  descricao varchar(255),
  valor int,
  data date,
  categoria_id int,
  usuario_id int,
  tipo varchar(25)
);

insert into categorias (descricao) 
values ('Alimentação'), 
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');

-- QUERYS USADAS NOS ( ENDPOINTS )

-- Cadastrar Usuario
INSERT INTO usuarios (nome, email, senha)
VALUES ($1, $2, $3) RETURNING *;

-- Login do Usuario (EncontraUsuarioPorEmail)
select * from usuarios where email = $1;

-- Detalhar Usuario
select id, nome, email as email from usuarios where id = $1;

-- Atualizar Usuario
update usuarios set nome = $1, email = $2, senha = $3 where id = $4;

-- Listar categorias
select * from categorias;

-- Encontrar Categorias
select * from categorias where id = $1

-- Listar todas transacoes
SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id,  t.categoria_id, c.descricao AS categoria_nome
FROM transacoes t JOIN categorias c ON t.categoria_id = c.id WHERE t.usuario_id = $1;

-- Detalhar transacao
SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id,  t.categoria_id, c.descricao AS categoria_nome
FROM transacoes t JOIN categorias c ON t.categoria_id = c.id WHERE t.id = $1 AND t.usuario_id = $2;

-- Cadastrar Transacao
INSERT into transacoes (descricao, valor, data, categoria_id, usuario_id, tipo)
SELECT $1, $2, $3, $4, $5, $6 RETURNING *;

-- Atualizar Transacao
UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5
WHERE id = $6 AND usuario_id = $7 RETURNING *;

-- Remover Transação
delete from transacoes where usuario_id = $1 and id = $2 returning *;