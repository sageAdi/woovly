import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Hero(props) {
  var items = [
    "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/archies_parfum_web-8_1800x.jpg?v=1636620667",
    "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/lotus_web-8_1800x.jpg?v=1636620810",
    "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/Web_d9a56606-9187-4453-bedd-455cce3007f7_1800x.png?v=1637739537",
    "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/lets_shave_web-8_1800x.jpg?v=1636649274",
    "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/skin_secrets_web-8_1800x.jpg?v=1636649380",
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper elevation={0}>
      <img
        src={item}
        alt="carosol 1"
        style={{ height: "auto", width: "100%" }}
      ></img>
    </Paper>
  );
}
