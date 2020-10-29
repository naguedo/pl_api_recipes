class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.belongs_to :recipe
      t.string :name, null: false
    end
  end
end
