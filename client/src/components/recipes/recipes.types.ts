export enum RecipeDifficulty {
  childish = "Très facile",
  easy = "Facile",
  normal = "Normal",
  hard = "Difficile",
}

export enum RecipeBudget {
  cheap = "€",
  moderate = "€€",
  expensive = "€€€",
}

export type RecipeType = {
  difficulty: "childish" | "easy" | "normal" | "hard";
  budget: "cheap" | "moderate" | "expensive";
  people_quantity: number;
  ingredients: string[];
  nb_comments: number;
  author_tip: string;
  total_time: string;
  prep_time: string;
  cook_time: string;
  author: string;
  image: string;
  name: string;
  rate: string;
  id: number;
};

export type IngredientFiltersType = {
  onDelete: (ingredient?: string) => void;
  ingredients: string[];
};

export type MetaType = {
  total_recipes: number;
  total_pages: number;
  per_page: number;
  query: string;
  page: number;
};

export type DataType = {
  recipes: RecipeType[];
  meta: MetaType;
};
