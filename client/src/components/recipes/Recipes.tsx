import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Box } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import {
  DataType,
  RecipeType,
  RecipeBudget,
  RecipeDifficulty,
} from "./recipes.types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    nbRecipes: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(5),
    },
    tags: {
      "& > *": {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    card: {
      height: "100%",
    },
    cardMedia: {
      height: 275,
    },
  })
);

export default function Recipes({
  data,
  ingredients,
  loading,
}: {
  data?: DataType;
  ingredients: string[];
  loading: boolean;
}) {
  const classes = useStyles();

  if (!data || !ingredients.length) {
    return null;
  }

  if (loading) {
    return <LinearProgress color="secondary" variant="query" />;
  }
  return (
    <div className={classes.root}>
      {data.recipes.length ? (
        <>
          <Typography
            className={classes.nbRecipes}
            component="p"
            variant="h5"
            gutterBottom
          >
            {data.meta.total_recipes} Recette(s) trouvée(s)
          </Typography>
          <Grid container spacing={3}>
            {data.recipes.map((recipe, index) => (
              <RecipeCard key={`${index}-${recipe.id}`} recipe={recipe} />
            ))}
          </Grid>
        </>
      ) : (
        <Typography component="p" variant="h6">
          Oups !... Aucune recette n'a été trouvée pour cette combinaison
          d'aliments...
        </Typography>
      )}
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: RecipeType }): React.ReactElement {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={
              recipe.image ||
              "https://biritemarket.com/wp-content/uploads/2020/03/FEAST_Recipe_Placeholder_Image-768x576.jpg"
            }
            title={recipe.name}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              gutterBottom
            >
              Postée par {recipe.author}
            </Typography>
            <Box display="flex" flexWrap="wrap" py={1} className={classes.tags}>
              <Chip icon={<ScheduleRoundedIcon />} label={recipe.total_time} />
              <Chip
                icon={<PeopleAltRoundedIcon />}
                label={`${recipe.people_quantity} pers.`}
              />
              <Chip
                label={RecipeDifficulty[recipe.difficulty]}
                icon={<WhatshotRoundedIcon />}
              />
              <Chip
                icon={<PaymentRoundedIcon />}
                label={RecipeBudget[recipe.budget]}
              />
            </Box>
            <Typography variant="h5" component="h2">
              {recipe.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {recipe.ingredients.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
