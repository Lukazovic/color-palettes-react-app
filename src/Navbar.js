import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import logo from "./logo.svg";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(evt) {
    this.setState({ format: evt.target.value });
    this.props.changeFormat(evt.target.value);
  }
  render() {
    const { level, changeLevel, changeFormat } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <img src={logo} alt="Color palette" />
          <a href="#">Color Piker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba (255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
