class TradeItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :player_id, :pokemon_id, :pokemon_name, :pokemon_sprite_url, :pokemon_base_xp
end