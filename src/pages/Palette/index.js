import React, { Component } from "react";
import ColorBox from "../../components/ColorBox";
import Navbar from "../../components/Navbar";
import PaletteFooter from "../../components/PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class Palette extends Component {
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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.handleLevelChange}
          changeFormat={this.hangleFormatChange}
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
