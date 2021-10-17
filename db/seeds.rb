require 'poke-api-v2'

for i in 1..151
  pokemon = PokeApi.get(pokemon: i )
  
  Pokemon.create(
    name: pokemon.name.capitalize,
    base_experience: pokemon.base_experience,
    sprite: pokemon.sprites.front_default,
  )
end