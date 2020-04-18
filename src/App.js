import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Hello</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>Palette</h1>} />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
