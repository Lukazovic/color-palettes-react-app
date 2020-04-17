import React, { Component } from "react";
import ColorBox from "./ColorsBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.hangleFormatChange = this.hangleFormatChange.bind(this);
  }
  handleLevelChange(level) {
    this.setState({ level });
  }
  hangleFormatChange(value) {
    this.setState({ format: value });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.handleLevelChange}
          changeFormat={this.hangleFormatChange}
        />
        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
