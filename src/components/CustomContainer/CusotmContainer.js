import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: ["0px 95px", "!important"],
  },
}));
const CusotmContainer = () => {
  const classes = useStyles();

  return <Container className={classes.container}></Container>;
};

export default CusotmContainer;
