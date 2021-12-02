import { Button, Container, Grid, Link } from "@mui/material";
import React from "react";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import useStyles from "./footerStyle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.footerWrapper}>
      <Container
        className={
          matches ? classes.mobileFooterContainer : classes.footerContainer
        }
      >
        <Grid container justifyContent="space-between">
          <Grid item sx={8}>
            <div className={classes.footerLogo}>
              <img
                src="https://woovly-cdn.s3.ap-south-1.amazonaws.com/footer+logo/Woovly+Logo+White.png"
                alt="footerlogo"
                style={{ maxHeight: "36px", width: "100px" }}
              />
            </div>
            <div className={classes.footerQualitySection}>
              <Button
                className={classes.footerBtn}
                startIcon={<StarBorderRoundedIcon />}
                variant="contained"
              >
                Primium Quality
              </Button>
              <Button
                className={classes.footerBtn}
                variant="contained"
                startIcon={<AddTaskRoundedIcon />}
              >
                Free Shipping
              </Button>
              <Button
                className={classes.footerBtn}
                variant="contained"
                color="primary"
                startIcon={<SwapHorizRoundedIcon />}
              >
                Easy Return
              </Button>
              <Button
                className={classes.footerBtn}
                variant="contained"
                color="primary"
                startIcon={<LockRoundedIcon />}
              >
                100% Secure
              </Button>
            </div>
            <Grid container>
              <Grid item sm>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Blog
                  </Link>
                </div>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Carrers
                  </Link>
                </div>
              </Grid>
              <Grid item sm>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Your Account
                  </Link>
                </div>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Your Orders
                  </Link>
                </div>
              </Grid>
              <Grid item sm>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Contact Us: +917406660500
                  </Link>
                </div>
                <div className={classes.footerText}>
                  <Link href="#" className={classes.link}>
                    Email: orders@woovly.com
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} justifyContent="flex-end">
            <div className={classes.socialSection}>
              <FacebookIcon color="primary" />
              <InstagramIcon color="primary" />
            </div>
            <div className={classes.termsSection}>
              <Link className={classes.link}>Terms of Service•</Link>
              <Link className={classes.link}>Privacy Policy•</Link>
              <Link className={classes.link}>Refund Policy</Link>
            </div>
            <div className={classes.footerText}>
              Woovly India Private Limited
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
