import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardText: {
    fontSize: [14, "!important"],
    fontWeight: [600, "!important"],
    lineHeight: ["19.6px", "!important"],
    color: ["rgb(89, 89, 89)", "!important"],
  },
});

export default function ProductCards({
  image,
  product,
  company,
  priceNew,
  priceOld,
  availability,
  width = 188,
}) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: width,
          minHeight: 400,
          "& hover": { backgroundColor: "transparent" },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            width="auto"
            height="240"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography noWrap gutterBottom>
              {product}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              className={classes.cardText}
            >
              {company}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              textAlign="start"
              color="secondary.main"
            >
              {priceNew}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
