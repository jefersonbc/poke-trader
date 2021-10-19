class CreateTrades < ActiveRecord::Migration[6.1]
  def change
    create_table :trades do |t|
      t.boolean :is_fair, default: nil
      t.integer :player_one_id
      t.integer :player_two_id

      t.timestamps
    end
  end
end
