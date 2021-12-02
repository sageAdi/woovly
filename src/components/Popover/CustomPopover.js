import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: ["14px", "!important"],
    fontWeight: ["400px", "!important"],
    color: "#595959",
    "& :hover": {
      backgroundColor: "transparent",
      boxShadow: 0,
    },
  },
  navItem: {
    fontSize: ["14px", "!important"],
    fontWeight: ["400px", "!important"],
    color: "#595959",
  },
});
export default function MouseOverPopover({ navItem, subItem }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={classes.root}
        disableGutters
      >
        {navItem}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Container
          sx={{
            p: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          {subItem.map((item, i) => (
            <Button key={i} sx={{ color: "black", display: "block" }}>
              {item}
            </Button>
          ))}
        </Container>
      </Popover>
    </div>
  );
}
