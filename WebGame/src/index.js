import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game/Game";
import { HashRouter } from "react-router-dom";

const contenitore = document.getElementById("root");
const root = ReactDOM.createRoot(contenitore);

root.render(
  <HashRouter>
    <Game />
  </HashRouter>
);
