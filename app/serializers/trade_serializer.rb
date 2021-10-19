class TradeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :is_fair, :player_one_pokemons, :player_two_pokemons
end