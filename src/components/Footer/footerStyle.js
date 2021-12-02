import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    backgroundColor: "#000",
  },
  footerContainer: {
    padding: ["20px 95px 50px 95px", "!important"],
    margin: ["50px 0px 0px 0px", "!important"],
  },
  footerLogo: {
    marginTop: "20px",
  },
  footerQualitySection: {
    marginTop: "20px",
  },
  footerBtn: {
    fontSize: ["12px", "!important"],
    fontWeight: ["600px", "!important"],
    lineHeight: ["22.44px", "!important"],
    padding: ["0px 12px 0px 12px", "!important"],
    marginRight: ["10px", "!important"],
  },
  footerText: {
    fontSize: ["12px", "!important"],
    fontWeight: ["600px", "!important"],
    lineHeight: ["22.44px", "!important"],
    marginTop: 10,
  },
  socialSection: {
    marginTop: 20,
  },
  termsSection: {
    marginTop: 20,
  },
  link: {
    textDecoration: ["none", "!important"],
    "&:hover": {
      color: "#FF0000",
    },
  },
});

export default useStyles;
