## Sobre o projeto
O bjetivo deste projeto é gerenciar trocas de pokemon, onde o usuário escolhe quais pokémons deseja trocar para cada um dos treinadores, incluindo validações como varificar se uma troca é justa ou não e a quantidade de pokémons a serem trocados (1 a 6). As informações sobre os pokémons foram obtidas da API PokeAPI. Feito com Ruby on Rails, React JS e PostgreSQL.

## Stack
A stack escolhida foi o Ruby on Rails, React e PostgreSQL.

## Como utilizar

### Em produção
A aplicação está disponível em produção no endereço: https://jefersonbc-poke-trader.herokuapp.com/

### Local
Para executar a aplicação (nativamente) você precisa do PostgreSQL instalado e rodando. Com isso, basta rodar **bundle install** seguido por **rails db:create && rails db:migrate**. **Atenção!** É necessário pré-popular a aplicação com os pokémons da API PokeAPI. Para isso, executo **rails db:seed**. Após isso, basta rodar o servidor do Rails com o comando **rails s** e acessar o endereço **http://localhost:3000** no seu navegador.

## API Endpoints e rotas
A aplicação possui os seguintes endpoints e rotas:

### api/v1: API endpoints:

api/v1/pokemons: [GET] - retorna todos os pokémons
api/v1/trades: [GET] - retorna todas as trocas e os itens da troca (player e pokémon)
api/v1/trades: [POST] - insere uma nova troca e os itens associados (ites da troca)

### Rotas
/ - página inicial com a UI para realizar as trocas
/trades - Página para visualizar o histórico de trocas

## Teste a aplicação
