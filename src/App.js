import React from "react";
import Palette from "./Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
