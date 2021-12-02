import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCards from "../ProductCard/ProductCard";
import globalStyle from "../../globalStyle";

const FeaturedProducts = () => {
  const globalClasses = globalStyle();

  const featuredProducts = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/Mockup03_NippleCaringBalm_Strawberry_Front_300x.png?v=1637295520",
      url: "https://shop.woovly.com/collections/featured/products/sanfe-breast-nipple-caring-balm-for-new-mothers-15gm-with-calendula-oil-cocoa-butter-strawberry",
      name: "Sanfe Breast Nipple Caring Balm for New Mothers",
      name_url:
        "https://shop.woovly.com/collections/featured/products/sanfe-breast-nipple-caring-balm-for-new-mothers-15gm-with-calendula-oil-cocoa-butter-strawberry",
      company: "Sanfe",
      company_url: "https://shop.woovly.com/collections/sanfe",
      priceNew: "₹ 79",
      soldOption: "Sold out",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/MCaf41_1_300x.jpg?v=1627897143",
      url: "https://shop.woovly.com/collections/featured/products/lotus-botanicals-natural-baking-soda-deep-cleansing-face-wash-180ml",
      name: "Lotus Botanicals Natural Baking Soda Deep Cleansing Face Wash",
      name_url:
        "https://shop.woovly.com/collections/featured/products/lotus-botanicals-natural-baking-soda-deep-cleansing-face-wash-180ml",
      company: "Lotus Botanicals",
      company_url: "https://shop.woovly.com/collections/lotus-botanicals",
      priceNew: "₹ 89",
      soldOption: "Sold out",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/1_37b5003e-be9c-4779-a80d-115942320b48_300x.png?v=1632123458",
      url: "https://shop.woovly.com/collections/featured/products/naked-raw-coffee-face-wash-with-white-water-lily",
      name: "mCaffeine Naked and Raw Coffee Face Wash - 100ml",
      name_url:
        "https://shop.woovly.com/collections/featured/products/naked-raw-coffee-face-wash-with-white-water-lily",
      company: "mCaffeine",
      company_url: "https://shop.woovly.com/collections/mcaffeine",
      priceNew: "₹ 325",
      soldOption: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/1_18ead59d-ee61-4ea9-a617-40bfe2a291f3_300x.jpg?v=1632479618",
      url: "https://shop.woovly.com/collections/featured/products/tru-hair-onion-hair-oil-with-heater-110ml",
      name: "Tru Hair – Onion Hair Oil with Heater – 110ml",
      name_url:
        "https://shop.woovly.com/collections/featured/products/tru-hair-onion-hair-oil-with-heater-110ml",
      company: "Tru Hair",
      company_url: "https://shop.woovly.com/collections/tru-hair",
      priceNew: "₹ 279",
      soldOption: "Add to cart",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/products/9_da1f5b0e-e973-4e82-a61b-77d2335dbcdf_300x.png?v=1636373385",
      url: "https://shop.woovly.com/collections/featured/products/bamboo-toothbrush-charcoal-bristles-with-reusable-jute-pouch",
      name: "Bamboo Toothbrush Charcoal Bristles For Natural Whitening - The Bamboo Bae",
      name_url:
        "https://shop.woovly.com/collections/featured/products/bamboo-toothbrush-charcoal-bristles-with-reusable-jute-pouch",
      company: "The Bamboo Bae",
      company_url: "https://shop.woovly.com/collections/the-bamboo-bae",
      priceNew: "₹ 79",
      soldOption: "Add to cart",
    },
  ];
  return (
    <Container className={globalClasses.container}>
      <Typography variant="h6" className={globalClasses.heading}>
        Featured Products
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {featuredProducts.map((item, i) => (
          <ProductCards
            key={i}
            image={item.image}
            product={item.name}
            company={item.company}
            priceNew={item.priceNew}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
