import sizes from "../../utils/sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    textDecoration: "none",
    color: "black",
  },
  logoItems: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    "& img": {
      marginRight: "0.5rem",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "#0384cc",
      outline: "none",
      border: "2px solid #0384cc",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
