# Descrição do projeto 💁‍♂️

Uma aplicação para visualização e criação de salas de eventos, eventos, e confirmação de presença de usuários.

Criada para consolidar meus estudos sobre o desenvolvimento de APIs utilizando:

- Typescript
- Nodejs
- GraphQL
- Prisma

# Preparando o ambiente 🔨

## Instalando dependências do projeto

```bash
yarn install
```

## Conectando a um banco de dados

### Configurando as variáveis de ambiente

Para que o Prisma se conecte à uma database é necessário que seja configurada uma URL.
O nome dessa URL deve está no arquivo `prisma/schema.prisma`:

```javascript
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Já a URL deve ser configurada como uma variável de ambiente, dentro do arquivo `.env` localizado na pasta raiz:

```javascript
// Para Postgres:
DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA";

// Para Mysql:
DATABASE_URL = "mysql://USER:PASSWORD@HOST:PORT/SCHEMA";
```

### Rodando migrations

Para rodar as migrations e sincronizar o banco de dados em um ambiente de desenvolvimento é utilizado o comando:

```bash
yarn prisma migrate dev
```

enquanto que, para ambientes de teste ou produção:

```bash
yarn prisma migrate deploy
```

Fonte: [Prisma Migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## Iniciando a aplicação 🪄

Execute o script de desenvolvimento utilizando:

```bash
yarn dev
```
