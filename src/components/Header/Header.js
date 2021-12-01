import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Grid,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { makeStyles } from "@mui/styles";
import "./header.css";

const useStyles = makeStyles({
  inputField: {
    [`& fieldset`]: {
      borderTopRightRadius: 12,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 12,
    },
  },
  headerBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 0,
    paddingRight: 17,
    paddingBottom: 0,
    paddingLeft: 17,
    margin: [0, "!important"],
  },
  btnText: {
    fontSize: [10, "!important"],
    fontWeight: 500,
  },
});

const Header = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const classes = useStyles();
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Container
        sx={{
          width: "100vw",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ margin: "1rem" }}>
          <Grid item xs={2}>
            <img
              src="https://cdn.shopify.com/s/files/1/0522/7020/3059/files/woovly_logo_red_f915afbe-9117-4eea-967c-7cd77d807175_120x@2x.png?v=1634825398"
              alt="logo"
              className="logo"
            />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ display: "flex" }}>
              <FormControl sx={{ width: 200 }}>
                <Select
                  id="select"
                  value={category}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  varient="filled"
                  sx={{
                    height: 36,
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "0px",
                  }}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  <MenuItem value={10}>Category 1</MenuItem>
                  <MenuItem value={20}>Category 2</MenuItem>
                  <MenuItem value={30}>Category 3</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                placeholder="Search for brand, products, etc"
                fullWidth
                inputProps={{
                  style: {
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingBottom: 6,
                    paddingLeft: 12,
                  },
                }}
                className={classes.inputField}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button startIcon={<LockOpenRoundedIcon />} className={classes.headerBtn}>
              <Typography className={classes.btnText}>Login</Typography>
            </Button>
            <Button startIcon={<LocalMallIcon />} className={classes.headerBtn}>
              <Typography className={classes.btnText}>Cart</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
