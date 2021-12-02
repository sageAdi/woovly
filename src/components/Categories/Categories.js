import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import Card from "../Cards/Cards";
import globalStyle from "../../globalStyle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Categories = () => {
  const globalClasses = globalStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const data = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/makeup_504d3949-20a7-4450-9e52-1c57df65e03e_200x.png?v=1638255467",
      name: "Makeup",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/skin_care_008168d6-4a24-4440-9683-1ee68f646040_200x.png?v=1638255467",
      name: "Skin care",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/bath_body_200x.png?v=1638255467",
      name: "Bath & Body",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/personal_care_5e4ec48b-1365-4ed0-aa7c-012cd65a3b95_200x.png?v=1638255467",
      name: "Personal Care",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/hair_care_5f7d66bf-1631-406e-bf9d-4ecb29fd5c9b_200x.png?v=1638255467",
      name: "Hair",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/fragrance_7d50ea4e-b4f6-4f44-88c5-63498f3978b4_200x.png?v=1638255467",
      name: "Fragrance",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0522/7020/3059/files/aromatherapy_6aa52d6f-bd1f-4d01-9b55-d4a24cebc0b3_200x.png?v=1638255467",
      name: "Aromatherapy",
    },
  ];
  return (
    <Container
      className={
        matches ? globalClasses.mobileContainer : globalClasses.container
      }
    >
      <Typography variant="h6" className={globalClasses.heading}>
        Caterogies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            name={item.name}
            width="50%"
            boxShadow={0}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
