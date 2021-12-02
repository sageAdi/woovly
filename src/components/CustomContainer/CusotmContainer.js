import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { makeStyles } from "@mui/styles";
import CustomPopover from "../Popover/CustomPopover";
import globalStyle from "../../globalStyle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles({
  inputField: {
    [`& fieldset`]: {
      borderTopRightRadius: 12,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 12,
    },
  },
  mobileInputField: {
    [`& fieldset`]: {
      bordeRadius: 20,
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
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  [theme.breakpoints.down("sm")]: {
    minHeight: 80,
  },
  minHeight: 128,
}));
const NavItem = styled(Button)({
  boxShadow: 0,
  color: "black",
});

export default function ProminentAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const pages = [
    "Brands",
    "Makeup",
    "Skin Care",
    "Bath & Body",
    "Hair",
    "Personal Care",
    "Fragrance",
    "Mom Store",
    "Aromatherapy",
  ];
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();
  const theme = useTheme();
  const globalClasses = globalStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
      <StyledToolbar>
        <Container
          sx={{
            width: "100vw",
            flexGrow: 1,
            overflow: "hidden",
          }}
          className={
            matches ? globalClasses.mobileContainer : globalClasses.container
          }
        >
          <Grid
            container
            // sx={{ margin: "1rem" }}
            justifyContent="space-around"
          >
            <Grid item xs={2}>
              <img
                src="https://cdn.shopify.com/s/files/1/0522/7020/3059/files/woovly_logo_red_f915afbe-9117-4eea-967c-7cd77d807175_120x@2x.png?v=1634825398"
                alt="logo"
                className="logo"
              />
            </Grid>
            <Grid
              item
              xs={8}
              md={8}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
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
            <Grid item xs={2} sx={{ display: "flex" }}>
              <IconButton size="small" className={classes.headerBtn}>
                <LockOpenRoundedIcon />
                <Typography className={classes.btnText}>Login</Typography>
              </IconButton>
              <IconButton className={classes.headerBtn}>
                <LocalMallIcon />
                <Typography className={classes.btnText}>Cart</Typography>
              </IconButton>
            </Grid>
            <Grid item xs={12} md={0} sx={{ display: { xs: "block", sm: "none" } }}>
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
                className={classes.mobileInputField}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                    }}
                    className={classes.root}
                  >
                    <CustomPopover navItem={page} subItem={pages} />
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledToolbar>
    </AppBar>
  );
}
