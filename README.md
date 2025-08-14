# Cadastro de Produtos – API .NET + Frontend React

## Descrição

Projeto de cadastro e listagem de produtos.
O backend é uma API REST em .NET 9 com Entity Framework InMemory, e o frontend é um app React consumindo a API.
A interface é responsiva e estilizada com Bootstrap, permitindo cadastro rápido e visualização de produtos lado a lado com o formulário.

## Tecnologias e Bibliotecas
### Backend
* .NET 9
* Entity Framework Core (InMemory)
* Swagger
* CORS – para permitir comunicação com frontend React

#### Pacotes instalados via NuGet:
```bash
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package Swashbuckle.AspNetCore
```
### Frontend
* React
* Bootstrap
* Fetch API

#### Pacotes instalados via npm:
```bash
npm install bootstrap
```

## Executando o projeto

### Backend
No terminal, dentro da pasta ProdutoAPI:

```bash
dotnet restore
dotnet run
```
Verificar a porta em que será aberta o servidor.

### Frontend
No terminal, dentro da pasta produto-frontend:
```bash
npm install
npm start
```

## Funcionalidades
* Cadastro de produtos (nome, preço, categoria)
* Listagem de produtos lado a lado com o formulário
* Documentação da API via Swagger