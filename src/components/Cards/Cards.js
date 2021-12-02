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

export default function ActionAreaCard({ image, name, width }) {
  const classes = useStyles();
  return (
    <Grid item xs={4} md>
      <Card
        sx={{
          maxWidth: 130,
          boxShadow: 0,
          "& hover": { backgroundColor: "transparent", opacity: 0 },
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
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              textAlign="center"
              className={classes.cardText}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
