class Recipe < ApplicationRecord
    belongs_to :author

    has_many :recipe_tags
    has_many :tags, through: :recipe_tags
    has_many :ingredients, dependent: :delete_all

    enum difficulty: { childish: 0, easy: 1, normal: 2, hard: 3 }
    enum budget: { cheap: 0, moderate: 1, expensive: 2 }
end
