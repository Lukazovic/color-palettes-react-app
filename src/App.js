import React from "react";
import Palette from "./Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
