import React, { Component } from "react";
import ColorBox from "./ColorsBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.handleLevelChange}
          />
        </div>
        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
