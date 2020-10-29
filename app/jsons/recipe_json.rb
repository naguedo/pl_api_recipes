class RecipeJson
  private

  attr_reader :recipe

  public

  def initialize(recipe:)
    @recipe = recipe
  end

  def to_h
    {
      id: recipe.id,
      author: recipe.author.name,
      prep_time: recipe.prep_time,
      cook_time: recipe.cook_time,
      total_time: recipe.total_time,
      name: recipe.name,
      image: recipe.image,
      rate: recipe.rate,
      people_quantity: recipe.people_quantity,
      nb_comments: recipe.nb_comments,
      difficulty: recipe.difficulty,
      budget: recipe.budget,
      author_tip: recipe.author_tip,
      ingredients: recipe.ingredients.map(&:name)
    }
  end
end
