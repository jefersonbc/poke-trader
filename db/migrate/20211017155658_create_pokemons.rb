class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :base_experience
      t.string :sprite

      t.timestamps
    end
  end
end
