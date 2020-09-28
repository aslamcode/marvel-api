# Marvel - API

## Instruções de instalação:

* NODE (v10.16.0)
* NPM
* MongoDB (4.4.1) - [link para download](https://www.mongodb.com/try/download/community)

## Instruções de configuração:

* Clone o repositório
* Na pasta raiz execute o comando através do terminal:
 `npm i` ou `npm install` para realizar o download das dependências
* Crie um arquivo de ambiente chamado .env na pasta raiz do projeto, ele deverá conter os seguintes dados:

  ```### Development vars ###
  DEV_PORT=8080
  DEV_DB_CONNECTION=mongodb://127.0.0.1:27017/marvel-dev?compressors=disabled&gssapiServiceName=mongodb

  ### Production vars ###
  PORT=8080
  DB_CONNECTION=mongodb://127.0.0.1:27017/marvel?compressors=disabled&gssapiServiceName=mongodb

  ### Set production or dev environment ###
  NODE_ENV=dev
  ```
* Ainda na pasta raiz do projeto rode o script de inicialização dos dados no banco: `npm run init-db`

## Instruções de execução:

* Na pasta raiz do projeto execute o comando para servir a aplicação: `npm run serve`
* Caso queria apenas buildar e executar a aplicação rode os comandos em sequência: `npm run build` e `npm start`
* Se tudo estiver OK será informado em qual porta a API estará rodando e se também está conectado com o banco. Dependendo de como o mongoDB server foi instalado, será necessário substituir a string de conexão no arquivo de ambiente .env

## Instruções de testes dos end points:

* No banco foi carregado 2 personagens, então para obter resultados nas consultas utilize os seguintes IDS: 1011334 e 1017100.

## Detalhes da implementação

* A implementação da arquitetura do projeto foi baseada nos padrões do ONION e está implementada da seguinte forma:
  * API: Contém os controllers, interfaces e factories necessários para receber ou enviar respostas
  * DOMAIN: Contém as entidades, interfaces e serviços
  * INFRA: Contém os repositórios e models utilizados no projeto
* Pastas que estão do lado de fora da pasta APP, são arquivos que podem ser reaproveitados entre outros projeto e não tem especificamente código acoplado a esta aplicação, como middlewares, scripts e funções da pasta utils.
* Os dados do arquivo .env foi adicionado a este readme apenas para simplificar a execução e testes da aplicação, visto que o mesmo não é comitado no projeto.
