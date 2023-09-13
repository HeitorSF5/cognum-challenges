# Desafios Cognum
Minha solução para os desafios propostos pela etapa de teste técnico da Cognum.
As seguintes tecnologias foram utilizadas para o desenvolvimento:
  - `Node`, `JavaScript`, `Express`, `Axios`, `Nodemon`, `MySQL`, `dotenv`, `Cors`

## Configuração:
🧩 Dependencias:
 - Usando seu CLI de preferência simplesmente rode o comando `npm i` dentro da root do projeto

🌐 Environment / Ambiente:
 - Incluido no projeto está um arquivo chamado `.env.EXAMPLE`. Faça as seguintes modificações neste mesmo arquivo:
   - Renomeie-o para somente `.env`
   - Insira seus dados e credenciais para os correspondentes na sua maquina como por exemplo: `MYSQL_HOST=localhost` 
     - Essa aplicação roda na porta `3000`, então não se conecte ao seu Banco de Dados com a mesma porta em `DB_PORT=`!

🚩 Scripts:
 - Para rodar o servidor utilize o comando: `npm start`

📃 Estrutura da Tabela `Employee`:
  - `id`: Primary Key, Integer, Auto Increment, Not Null
  - `name`: VarChar(45), Not Null
  - `role`: VarChar(45), Not Null
