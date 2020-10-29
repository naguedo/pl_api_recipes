module Api::V1
  class RecipesController < ApplicationController
    DEFAULT_PER_PAGE = 18
    DEFAULT_PAGE = 1
    
    # api :GET, '/recipes', 'Return recipe list'
    # param :per_page, Integer, required: false
    # param :query, String, required: false
    def index
        per_page = params[:per_page]&.to_i || DEFAULT_PER_PAGE
        page = params[:page]&.to_i || DEFAULT_PAGE
        query = params[:query] || ""

        queries = query.split(",").map { |q| "%#{q.downcase.strip}%" }
        recipe_ids = []
        
        if queries.present?
            queries.each do |q|
                tmp_recipe_ids = Ingredient.where('UNACCENT(LOWER(name)) ILIKE UNACCENT(?)', q)
                                           .pluck(:recipe_id)
                                           .uniq

                excluded_ids = []
                excluded_ids = recipe_ids - tmp_recipe_ids | tmp_recipe_ids - recipe_ids unless recipe_ids.empty?
                
                recipe_ids = (recipe_ids + tmp_recipe_ids) - excluded_ids
            end
        end
        
        recipes = Recipe.where(id: recipe_ids).order('rate DESC NULLS LAST').order(id: :asc)
                        .page(page)
                        .per(per_page)
        
        render json: {
            meta: {
                total_recipes: recipes.total_count,
                total_pages: recipes.total_pages,
                per_page: per_page,
                query: query,
                page: page
            },    
            recipes: recipes.map { |recipe| ::RecipeJson.new(recipe: recipe).to_h }
        }
    end
  end
end
