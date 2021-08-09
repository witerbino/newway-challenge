<div align="center">
  <br/>
  <div>
    <img src="github/logo.png" />
  </div>
  <br/>
  <br/>
  <p>
    Projeto desenvolvido para o desafio da vaga de desenvolvedor NodeJS na <a href="https://www.gruponewway.com.br/">New Way</a></p>

  <p>O objetivo era desenvolver uma API que seja responsável por fazer o envio de mensagens.</p>
<br/>
<br/>
</div>

# Tecnologias

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Node Postgres](https://node-postgres.com/)
- [Postgres](https://www.postgresql.org/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

# Rodando

1. É preciso ter o docker instalado e o docker compose
2. Clone esse repositório `git clone https://github.com/witerbino/newway-challenge.git`
3. Entre na pasta do projeto `cd newway-challenge`
4. Execute o comando `docker-compose up`
5. Executando esse comando ele já ira subir o container do banco e da aplicação, também irá criar rodar a migration para criar a tabela **messages**
6. O projeto vai estar rodando no link `http://localhost:3000/api/messages`

# Licença

Este projeto está licenciado sob a Licença MIT - veja a página [LICENÇA](https://opensource.org/licenses/MIT) para detalhes.