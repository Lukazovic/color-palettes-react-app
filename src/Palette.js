import React, { Component } from "react";
import ColorBox from "./ColorsBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.handleLevelChange = this.handleLevelChange.bind(this);
  }
  handleLevelChange(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.handleLevelChange} />
        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
