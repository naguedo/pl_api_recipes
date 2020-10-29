import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { IngredientFiltersType } from "./recipes.types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(2),
      flexWrap: "wrap",
      display: "flex",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

export default function IngredientFilters({
  ingredients,
  onDelete,
}: IngredientFiltersType) {
  const classes = useStyles();

  if (!ingredients.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Chip onDelete={() => onDelete()} label="Tout supprimer" />
      {ingredients.map((ingredient, index) => (
        <Chip
          onDelete={() => onDelete(ingredient)}
          key={`${index}-${ingredient}`}
          label={ingredient}
          color="secondary"
        />
      ))}
    </div>
  );
}
