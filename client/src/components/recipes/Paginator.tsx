import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";

import { DataType } from "./recipes.types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
  })
);

export default function Paginator({
  data,
  loading,
  onChange,
}: {
  data?: DataType;
  loading: boolean;
  onChange: (value: number) => void;
}): React.ReactElement | null {
  const classes = useStyles();

  if (
    loading ||
    !data ||
    !data.recipes.length ||
    data.meta.total_recipes < data.meta.per_page
  ) {
    return null;
  }

  const { total_pages, page } = data.meta;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Box
      className={classes.root}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Pagination
        onChange={handleChange}
        count={total_pages}
        boundaryCount={2}
        siblingCount={0}
        page={page}
      />
    </Box>
  );
}
