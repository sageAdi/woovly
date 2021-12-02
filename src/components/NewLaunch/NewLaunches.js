import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCards from "../ProductCard/ProductCard";
import globalStyle from "../../globalStyle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const NewLaunches = () => {
  const globalClasses = globalStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const newLaunch = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/MCaf85_1_400x.jpg?v=1629110787",
      productName: "Furr By Pee Safe Natural Hair Tonic",
      productName_url:
        "https://shop.woovly.com/collections/newly-launched/products/furr-natural-hair-tonic-by-pee-safe",
      company: "Pee Safe",
      company_url: "https://shop.woovly.com/collections/pee-safe",
      priceNew: "₹ 79",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/MCaf87_1_400x.jpg?v=1627910028",
      productName: "Furr By Pee Safe Natural Hair Tonic",
      productName_url:
        "https://shop.woovly.com/collections/newly-launched/products/furr-natural-hair-tonic-by-pee-safe",
      company: "Pee Safe",
      company_url: "https://shop.woovly.com/collections/pee-safe",
      priceNew: "₹ 279",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/BNO_1_400x.jpg?v=1633428796",
      productName: "Furr By Pee Safe Natural Hair Tonic",
      productName_url:
        "https://shop.woovly.com/collections/newly-launched/products/furr-natural-hair-tonic-by-pee-safe",
      company: "Pee Safe",
      company_url: "https://shop.woovly.com/collections/pee-safe",
      priceNew: "₹ 59",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/hairtonic_1_400x.jpg?v=1633428787",
      productName: "Furr By Pee Safe Natural Hair Tonic",
      productName_url:
        "https://shop.woovly.com/collections/newly-launched/products/furr-natural-hair-tonic-by-pee-safe",
      company: "Pee Safe",
      company_url: "https://shop.woovly.com/collections/pee-safe",
      priceNew: "₹ 479",
    },
  ];
  return (
    <Container
      className={
        matches ? globalClasses.mobileContainer : globalClasses.container
      }
    >
      <Typography variant="h2" className={globalClasses.heading}>
        New Launch
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {newLaunch.map((item, i) => (
          <ProductCards
            key={i}
            image={item.image}
            product={item.productName}
            company={item.company}
            priceNew={item.priceNew}
            width="240px"
          />
        ))}
      </Grid>
    </Container>
  );
};

export default NewLaunches;
