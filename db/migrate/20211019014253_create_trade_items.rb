class CreateTradeItems < ActiveRecord::Migration[6.1]
  def change
    create_table :trade_items do |t|
      t.integer :trade_id
      t.integer :player_id
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
