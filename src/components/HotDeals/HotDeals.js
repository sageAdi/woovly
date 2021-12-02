import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCards from "../ProductCard/ProductCard";
import globalStyle from "../../globalStyle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HotDeals = () => {
  const globalClasses = globalStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const hotDeals = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/Main_4fe8c7fa-f6a3-4eb8-8ae0-562f0c7c7721_300x.jpg?v=1631173973",
      url: "https://shop.woovly.com/collections/hot-deals/products/mcaffeine-coffee-hair-spa-hair-fall-control-kit-shampoo-conditioner-hair-oil",
      offer: "Save 22%",
      productName:
        "mCaffeine Coffee Hair Spa & Hair Fall Control Kit - Shampoo Conditioner & Hair Oil",
      productName_url:
        "https://shop.woovly.com/collections/hot-deals/products/mcaffeine-coffee-hair-spa-hair-fall-control-kit-shampoo-conditioner-hair-oil",
      company: "mCaffeine",
      company_url: "https://shop.woovly.com/collections/mcaffeine",
      cart: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/CMB162_1_300x.jpg?v=1632487654",
      url: "https://shop.woovly.com/collections/hot-deals/products/panty-liners",
      offer: "Save 10%",
      productName: "Regular Panty Liners - Pack of 30 - The Woman's Company",
      productName_url:
        "https://shop.woovly.com/collections/hot-deals/products/panty-liners",
      company: "The Woman's Company",
      company_url:
        "https://shop.woovly.com/collections/vendors?q=The%20Woman%27s%20Company",
      cart: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/1_65cadd5e-7125-4164-babf-08131ec0f6a1_300x.jpg?v=1637326479",
      url: "https://shop.woovly.com/collections/hot-deals/products/sweat-pads",
      offer: "Save 61%",
      productName:
        "PINQ Rash Free Ultra Thin Disposable Underarm Sweat Pads - Pack of 14",
      productName_url:
        "https://shop.woovly.com/collections/hot-deals/products/sweat-pads",
      company: "PINQ",
      company_url: "https://shop.woovly.com/collections/vendors?q=PINQ",
      cart: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/Main_46592a82-297e-4ad8-bddf-15c27fa3c4bc_300x.jpg?v=1637327735",
      url: "https://shop.woovly.com/collections/hot-deals/products/stand-and-pee-stick",
      productName:
        "Portable & Biodegradable Stand and Pee Stick - The Woman's Company",
      productName_url:
        "https://shop.woovly.com/collections/hot-deals/products/stand-and-pee-stick",
      company: "The Woman's Company",
      company_url:
        "https://shop.woovly.com/collections/vendors?q=The%20Woman%27s%20Company",
      cart: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/1_3bb0e4ef-3d3d-41aa-91d9-896829def581_300x.png?v=1637559562",
      url: "https://shop.woovly.com/collections/hot-deals/products/nipple-cover-pack-of-10",
      offer: "Save 20%",
      productName:
        "PINQ Organic Cotton Feel Ultra Thin Nipple Cover Pasties - Pack of 10",
      productName_url:
        "https://shop.woovly.com/collections/hot-deals/products/nipple-cover-pack-of-10",
      company: "PINQ",
      company_url: "https://shop.woovly.com/collections/vendors?q=PINQ",
      cart: "Add to cart",
    },
  ];
  return (
    <Container
      className={
        matches ? globalClasses.mobileContainer : globalClasses.container
      }
    >
      <Typography variant="h6" gutterBottom className={globalClasses.heading}>
        Hot Deals
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {hotDeals.map((item, i) => (
          <ProductCards
            key={i}
            image={item.image}
            product={item.productName}
            company={item.company}
            priceNew={item.cart}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default HotDeals;
