import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import globalStyle from "../../globalStyle";
import BrandsCards from "../Cards/BrandsCards";

const FeaturedBrands = () => {
  const globalClasses = globalStyle();

  const data = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/m_caffeine_280x.png?v=1633686614",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/skinsecretsindia_280x.png?v=1633686644",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/pee_safe_280x.png?v=1633686674",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/letshave_280x.png?v=1633686778",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/auric_1627e18d-21c8-4014-86d1-6c02c58c1070_280x.png?v=1633686804",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/tru_hair_280x.png?v=1633686866",
    },
  ];
  return (
    <Container className={globalClasses.container}>
      <Typography variant="h6" className={globalClasses.heading}>
        Featured Brands
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item, i) => (
          <BrandsCards key={i} image={item.image} width="150px" />
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedBrands;
