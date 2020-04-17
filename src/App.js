import React from "react";
import Palette from "./Palette";
import seedColors from "./utils/seedColors";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
