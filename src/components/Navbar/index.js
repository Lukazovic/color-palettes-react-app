import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import logo from "../../images/logo.svg";
import "rc-slider/assets/index.css";
import styles from "./styles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  handleSelectChange(evt) {
    this.setState({ format: evt.target.value, open: true });
    this.props.changeFormat(evt.target.value);
  }
  closeSnackBar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format, open } = this.state;
    return (
      <header className={classes.Navbar}>
        <Link className={classes.logo} to="/">
          <div className={classes.logoItems}>
            <img src={logo} alt="Color palette" />
            <span>Color Palettes</span>
          </div>
        </Link>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba (255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={2000}
          onClose={this.closeSnackBar}
          ContentProps={{ "aria-describedby": "message" }}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
