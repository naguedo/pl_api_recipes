import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(2),
      width: "100%",
    },
    title: {
      paddingBottom: theme.spacing(0.5),
      paddingTop: theme.spacing(10),
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography className={classes.title} component="h1" variant="h2">
          Une envie de cuisiner ?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Rechercher une recette à partir des ingrédients que vous avez (ou non)
          dans votre réfrigérateur.
          <br />
          Pour se faire il vous suffit de taper les
          ingrédients un à un et le tour est joué !
        </Typography>
      </Container>
    </div>
  );
}

export default App;
