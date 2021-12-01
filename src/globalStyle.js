import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: [20, "!important"],
    fontWeight: [600, "!important"],
    color: ["rgb(33, 33, 33)", "!important"],
    lineHeight: ["30px", "!important"],
    paddingTop: "50px",
    marginBottom: ["20px", "!important"],
  },
  container: {
    padding: ["0px 95px", "!important"],
    margin: ["0px", "!important"],
  },
}));

export default useStyles;
