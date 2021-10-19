class Trade < ApplicationRecord
    has_many :trade_items
    accepts_nested_attributes_for :trade_items

    def player_one_pokemons
        player_one_pokemons = []
        
        trade_items = self.trade_items.where(player_id: self.player_one_id)
        trade_items.each do |item|
            player_one_pokemons.push item.pokemon
        end
        
        return player_one_pokemons
    end

    def player_two_pokemons
        player_two_pokemons = []
        
        trade_items = self.trade_items.where(player_id: self.player_two_id)
        trade_items.each do |item|
            player_two_pokemons.push item.pokemon
        end
        
        return player_two_pokemons
    end
end
