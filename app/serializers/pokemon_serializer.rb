class PokemonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :base_experience, :sprite
end
