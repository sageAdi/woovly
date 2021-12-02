import "./App.css";
import Categories from "./components/Categories/Categories";
import FeaturedBrands from "./components/Featured Brands/FeaturedBrands";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HotDeals from "./components/HotDeals/HotDeals";
import Navabar from "./components/Navbar/Navbar";
import NewLaunches from "./components/NewLaunch/NewLaunches";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListItem from "./components/ListItem/ListItem";

const theme = createTheme({
  palette: {
    primary: {
      main: "#677279",
      dark: "#212121",
      light: "#595959",
    },
    secondary: {
      main: "#d81222",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <ListItem /> */}
        <Navabar />
        <Hero />
        <Categories />
        <FeaturedBrands />
        <FeaturedProducts />
        <HotDeals />
        <NewLaunches />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
