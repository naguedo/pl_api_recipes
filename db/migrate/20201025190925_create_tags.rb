class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_tags do |t|
      t.belongs_to :recipe, null: false
      t.belongs_to :tag, null: false
    end

    create_table :tags do |t|
      t.string :name, null: false
    end
  end
end
