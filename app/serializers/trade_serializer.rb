class TradeSerializer
    include FastJsonapi::ObjectSerializer
    attributes :is_fair, :player_one_id, :player_two_id
  end