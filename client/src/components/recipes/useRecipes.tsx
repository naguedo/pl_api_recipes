import { useState, useEffect } from "react";
import { DataType } from "./recipes.types";

import axios from "axios";

export default function useRecipes() {
  const [data, setData] = useState<DataType | undefined>(undefined);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [page, setPage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const params = {
      query: ingredients.join(","),
      page: page,
    };

    axios
      .get("https://pl-recipes.herokuapp.com/api/v1/recipes", {
        params: params,
      })
      .then((result) => {
        setData(result.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, [ingredients, page]);

  return { data, loading, ingredients, setIngredients, setPage };
}
