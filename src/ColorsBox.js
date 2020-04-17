import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorsBox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
