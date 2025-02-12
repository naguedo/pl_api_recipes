class Tag < ApplicationRecord
    has_many :recipe_tags
    has_many :recipes, through: :recipe_tags
    
    validates :name, presence: true
end