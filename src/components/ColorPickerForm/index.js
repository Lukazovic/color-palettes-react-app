import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import styles from "./styles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", newColorName =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== newColorName.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", newColor =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChangeColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChange={this.handleChangeColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            value={newColorName}
            className={classes.colorNameInput}
            placeholder="Color Name"
            name="newColorName"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Color name is required",
              "Color name must be unique",
              "Color already used",
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            type="submit"
            color="primary"
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
