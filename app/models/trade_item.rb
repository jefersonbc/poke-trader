class TradeItem < ApplicationRecord
    belongs_to :trade
    belongs_to :pokemon
end
