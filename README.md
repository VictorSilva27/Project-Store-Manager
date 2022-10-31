# Projeto Store Manager

##🔰Como iniciar o projeto na sua máquina🔰

- ``` git clone git@github.com:VictorSilva27/Project-Store-Manager.git ``` (Clonar o repositório no local)
- ``` cd Project-Store-Manager ``` (Entrar no repositório clonado)

##🔰Rodando com Docker🔰
- ``` docker-compose up -d ``` (Instalando as images do NodeJs e MySql)

Em caso de Erro de funcionamendo de Porta, altere as linhas das ports no arquivo ``` docker-compose.yml ```
- ``` docker exec -it store_manager bash ``` (Entrando no container)
- ``` npm install ``` (Baixando as dependências do projeto)
- ``` npm start ``` (Iniciando o projeto)

No seu terminal deve estar aparecendo algo como ``` Escutando na porta 3000 ```

##🔰Criando e populando o banco de dados🔰

- ``` npm run migration ``` (Criando as tabelas e o banco)
- ``` npm run seed ``` (Populando o banco com os dados)

Agora copie e cola o link abaixo, no seu navegador: 
- ``` http://localhost:3000/products ```

Ou

- ``` http://localhost:3000/sales ```
