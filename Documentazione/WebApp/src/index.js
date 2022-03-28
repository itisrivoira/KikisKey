import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game/Game";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Game />
  </BrowserRouter>,
  document.getElementById("root")
);
