class CreateRecipe < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.belongs_to :author
      
      t.string :prep_time
      t.string :cook_time
      t.string :total_time
      t.string :name
      t.string :image
      
      t.decimal :rate, precision: 10, scale: 2
      
      t.integer :people_quantity
      t.integer :nb_comments
      t.integer :difficulty
      t.integer :budget
      
      t.text :author_tip
      
      t.timestamps
    end
  end
end