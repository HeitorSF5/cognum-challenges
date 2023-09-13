# Desafios Cognum
Minha solução para os desafios propostos pela etapa de teste técnico da Cognum.
As seguintes tecnologias foram utilizadas para o desenvolvimento:
  - `Node`, `JavaScript`, `Express`, `Axios`, `Nodemon`, `MySQL`, `dotenv`, `Cors`

## Configuração:
🧩 Dependencias:
 - Usando seu CLI de preferência simplesmente rode o comando `npm i` dentro da root do projeto
---

🌐 Environment / Ambiente:
 - Incluido no projeto está um arquivo chamado `.env.EXAMPLE`. Faça as seguintes modificações neste mesmo arquivo:
   - Renomeie-o para somente `.env`
   - Insira seus dados e credenciais para os correspondentes na sua maquina, como por exemplo: `MYSQL_HOST=localhost` 
     - Essa aplicação roda na porta `3000`, então não conecte ao seu Banco de Dados em `DB_PORT=` com a mesma porta!
---

🚩 Scripts:
 - Para rodar o servidor utilize o comando: `npm start`

Testando as Rotas:
  - Hello
    - `GET` `http://localhost:3000/hello`
  - Create Employee
    - `POST` `http://localhost:3000/employee`
    - `body` `{ "name": "Fulano de Tal", "role": "Função" }`
  - Read Employee
    - `GET` `http://localhost:3000/employee`
    - Você irá receber como resposta todos os Employees (sem paginação)
  - Update Employee
    - `PUT` `http://localhost:3000/employee/:id`
      - Substitua `:id` com o id de quem desejar alterar. Por exemplo: `http://localhost:3000/employee/3`
    - `body` `{ "name": "Novo Nome", "role": "Nova Função" }`
      - Você terá que prover um `name` e `role` mesmo que só queira mudar um deles
  - Delete Employee
    - `DELETE` `http://localhost:3000/employee/:id`
      - Substitua `:id` com o id de quem desejar alterar. Por exemplo: `http://localhost:3000/employee/3`
  - Populate Employee (API para gerar 10 novos funcionários)
    - `GET` `http://localhost:3000/employee/populate`
---

📃 Estrutura da Tabela `Employee`:
  - `id`: Primary Key, Integer, Auto Increment, Not Null
  - `name`: VarChar(45), Not Null
  - `role`: VarChar(45), Not Null
