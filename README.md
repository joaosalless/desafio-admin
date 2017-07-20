![cabecalho memed desafio](https://user-images.githubusercontent.com/2197005/28128758-3b0a0626-6707-11e7-9583-dac319c8b45b.png)

# Desafio do Admin

## Problema:

O banco de dados de medicamentos da Memed é um ponto chave da plataforma de prescrição digital, sendo que a equipe responsável mantém atualizados mais de 25 mil medicamentos alopáticos.

A tarefa de atualização é feita repetidas vezes no dia-a-dia dos especialistas em conteúdo da Memed, e acreditamos que ela possa ser executada de uma maneira mais eficiente.

A atualização de um medicamento exige:
- Fazer a busca pelo medicamento, utilizando parte do nome ou algum identificador (ID, GGREM, EAN…)
- Editar o medicamento, atualizando alguns campos
- Manter um histórico do que foi atualizado, para posterior auditoria dos dados

## Solução:

Criar um sistema de gerenciamento de conteúdo (CMS, vulgo "Admin"), onde um especialista possa encontrar e editar de forma rápida o medicamento e visualizar o histórico de modificações.

## Proposta:

A solução pode ser feita com ou sem frameworks front-end e back-end, mas deve utilizar os seguintes Design Patterns:
* Repository
* Service Locator
* Command
* MVC
* Singleton

Não é necessário utilizar o mesmo pattern em ambas as partes da aplicação (front-end e back-end).

O back-end deve ser uma API REST, de preferência, uma [JSON API](http://jsonapi.org/). Não é necessária autenticação para acessar o sistema, queremos que você se concentre no cadastro de medicamentos.

É livre a escolha do banco de dados. O arquivo [dados.csv](dados.csv) contém os dados fictícios de 20 medicamentos que deverão ser utilizados no desafio.

Fique a vontade para usar algum framework CSS (ex: Bootstrap, Material, Semantic UI).

Para enviar seu código, faça um fork deste repositório e nos avise quando concluir o desafio (:white_check_mark: as mensagens dos seus commits também serão analisadas). 

Lembre-se de alterar o README.md com as instruções para rodar o projeto.

## Etapas:

1 - O usuário deverá encontrar um medicamento utilizando um trecho do nome ou GGREM:
* roacutan (trecho do nome)
* 10100018200 (trecho do GGREM)

![buscando](https://user-images.githubusercontent.com/2197005/28128786-54953d04-6707-11e7-9342-ea7088f818ac.gif)

2 - A tabela com os medicamentos deverá listar os encontrados (respeitando o loading até que a resposta seja recebida)

3 - Ao clicar em um medicamento, as informações do mesmo poderão ser editadas:

![editando](https://user-images.githubusercontent.com/2197005/28128785-54949a7a-6707-11e7-9aca-f56bb193f0d3.gif)

4 - Ao salvar as alterações, deverá mostrar uma mensagem de sucesso ou erro:

![salvando](https://user-images.githubusercontent.com/2197005/28128784-54926958-6707-11e7-9249-21a890fb7b41.gif)

5 - O usuário deverá ver, no histórico do medicamento, a modificação realizada:

![historico](https://user-images.githubusercontent.com/2197005/28129284-240a6acc-6709-11e7-8441-d1f987d34b11.png)

Boa sorte _and let’s code_!

:m: Equipe Memed

# Instruções de uso da Solução

Faça o clone deste repositório com o comando:

```shell
git clone https://github.com/joaosalless/desafio-admin.git
```

Acesse acesse a pasta do projeto via terminal;

Instale as dependências do composer com o comando;

```shell
composer install
```

#### API

Execute este comando para iniciar o artisan serve que irá gerar a base de dados sqlite automaticamente, executar as migrations e os seeders.

Acesse a API no endereço

```php
http://localhost:8000/api/admin/medicamentos
```

#### Frontend Angular

Para acessar o frontend, acesse a url do servidor da API normalmente.

```php
http://localhost:8000
```

```php
ng serve
```

Acesse o frontend na Url 

```shell
http://localhost:4200
```

#### Screenshots

![](./docs/img1.png)

![](./docs/img2.png)

![](./docs/img3.png)