import React from "react";

import { Container } from "@material-ui/core";

import IngredientFilters from "./IngredientFilters";
import useRecipes from "./useRecipes";
import SearchBar from "./SearchBar";
import Paginator from "./Paginator";
import Recipes from "./Recipes";

export default function RecipesView(): React.ReactElement {
  const { data, loading, ingredients, setIngredients, setPage } = useRecipes();

  const handleSubmit = (ingredient: string) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleDelete = (ingredient?: string) => {
    if (!ingredient) {
      setIngredients([]);
      return;
    }
    const newIngredients = ingredients.filter((i) => i !== ingredient);
    setIngredients(newIngredients);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  }

  return (
    <Container maxWidth="lg">
      <SearchBar onSubmit={handleSubmit} />
      <IngredientFilters onDelete={handleDelete} ingredients={ingredients} />
      <Recipes data={data} loading={loading} ingredients={ingredients} />
      <Paginator data={data} loading={loading} onChange={handlePageChange} />
    </Container>
  );
}
