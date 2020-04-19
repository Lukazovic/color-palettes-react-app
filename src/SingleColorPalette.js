import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar
          changeFormat={this.hangleFormatChange}
          showingAllColors={false}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;