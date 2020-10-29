class RecipeTag < ApplicationRecord
  belongs_to :recipe
  belongs_to :tag
  
  validates :recipe, presence: true
  validates :tag, presence: true
end
