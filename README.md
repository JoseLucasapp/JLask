# 📚 JLASK (API de Perguntas e Respostas)
Esta é a API de um sistema de perguntas e respostas, inspirado em plataformas como Stack Overflow. Com esta API, usuários podem criar contas, postar perguntas, responder, votar e comentar em perguntas e respostas.

## 🚀 Tecnologias
 - Node.js
 - TypeScript
 - PostgreSQL
 - JWT para autenticação

## ⚙️ Funcionalidades
### Usuário

 - Criação e autenticação de contas (login/register com JWT)
 - Edição e exclusão do próprio perfil
 - Recuperação de senha

### Perguntas

 - Criar, editar e excluir perguntas
 - Visualizar perguntas com paginação
 - Adicionar tags para facilitar a busca

### Respostas

 - Responder perguntas
 - Editar e excluir respostas
 - Aceitar uma resposta como solução
 - Votação e Comentários

 - Votar em perguntas e respostas (upvote/downvote)
 - Comentar em perguntas e respostas

## 🛠️ Instalação e Execução
### Pré-requisitos
 - Node.js (>= 18.x)

### Passo 1: Clone o repositório

```
git clone https://github.com/JoseLucasapp/JLask.git
```

### Passo 2: Configuração
Crie um arquivo .env com as seguintes variáveis:

```
JWT_SECRET=sua_chave_secreta  
PORT=3000  
```

### Passo 3: Instale as dependências

```
npm install
```

### Passo 4: Execute a aplicação

```
npm start
```
