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

export default function BrandsCards({ image, name, width = "auto" }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: { width },
          "& hover": { backgroundColor: "transparent" },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            width={width}
            image={image}
            alt="green iguana"
            style={{ backgroundColor: "transparent" }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
