import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorsBox";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.hangleFormatChange = this.hangleFormatChange.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    Object.keys(allColors).map(
      key =>
        (shades = shades.concat(
          allColors[key].filter(color => color.id === colorToFilterBy)
        ))
    );
    return shades.slice(1);
  }
  hangleFormatChange(value) {
    this.setState({ format: value });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          changeFormat={this.hangleFormatChange}
          showingAllColors={false}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
