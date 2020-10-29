line_number = 1
success = 0
failure = 0

File.read('recipes.json').each_line do |line|
    next if line.gsub("\n", '').empty?

    json = JSON.parse(line)
    
    next if Recipe.exists?(name: json["name"])

    json_ingredients = json["ingredients"]
    json_tags = json["tags"]

    recipe_sanitize = json.except!("tags", "ingredients").to_h

    recipe_sanitize["difficulty"] = case json["difficulty"]
                                    when "très facile"
                                        0 # childish
                                    when "facile"
                                        1 # easy
                                    when "Niveau moyen"
                                        2 # normal
                                    when "difficile"
                                        3 # hard
                                    end

    recipe_sanitize["budget"] = case json["budget"]
                                when "bon marché"
                                    0 # cheap
                                when "Coût moyen"
                                    1 # moderate
                                when "assez cher"
                                    2 # expensive
                                end
    
    recipe_sanitize["author"] = json["author"].present? ? Author.find_or_create_by(name: json["author"]) : nil
    
    recipe = Recipe.new(recipe_sanitize)
    
    if (recipe.save)
        json_ingredients.each { |json_ingredient| Ingredient.create(name: json_ingredient, recipe: recipe) }
        
        json_tags.each do |json_tag|
            Tag.find_or_create_by(name: json_tag) do |tag|
                RecipeTag.create(
                    recipe: recipe,
                    tag: tag,
                )
            end
        end
        
        p "🍔 ##{line_number} - #{json["name"]}"
        success += 1
    else
        p "❌ ##{line_number} - #{json["name"]} - #{recipe.errors.messages}"
        failure += 1
    end

    line_number += 1
end

p "#{success} recipe(s) imported and #{failure} recipe(s) failed"