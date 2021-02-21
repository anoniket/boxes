import React from "react";
import Box from "./Components/Box";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Infi from "./Components/Infi";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Box} />
      <Route path="/infi" exact component={Infi} />
    </Router>
   
  );
}

export default App;
