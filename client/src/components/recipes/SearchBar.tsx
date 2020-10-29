import React, { useState, useRef, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4),
      display: "flex",
    },
    submitButton: {
      paddingLeft: theme.spacing(1),
      display: "flex",
    },
    searchBar: {
      width: "100%",
    },
  })
);

export default function SearchBar({
  onSubmit,
}: {
  onSubmit: (ingredient: string) => void;
}): React.ReactElement {
  const [value, setValue] = useState<string>("");
  const searchBarRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  useEffect(() => {
    if (searchBarRef.current) {
      searchBarRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentValue = searchBarRef?.current?.value;

    if (currentValue) {
      onSubmit(currentValue);
      setValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className={classes.form}
    >
      <TextField
        onChange={(input) => setValue(input.target.value)}
        placeholder="Poulet, citron, gingembre..."
        label="Ajouter un nouvel ingredient"
        InputLabelProps={{ shrink: true }}
        className={classes.searchBar}
        inputRef={searchBarRef}
        variant="outlined"
        name="ingredient"
        id="searchbar"
        value={value}
      />
      <div className={classes.submitButton}>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          type="submit"
        >
          <AddRoundedIcon />
        </Button>
      </div>
    </form>
  );
}
