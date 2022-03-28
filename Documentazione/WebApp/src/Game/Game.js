import "./Game.css";
import { Routes, Route } from "react-router-dom";

import Menu from "../screens/Menu/Menu";
import Gioca from "../screens/Gioca/Gioca";
import Opzioni from "../screens/Opzioni/Opzioni";
import Audio from "../screens/Opzioni/screens/Audio/Audio";

const Game = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Gioca" element={<Gioca />} />
      <Route path="/Opzioni" element={<Opzioni />} />
      <Route path="/Opzioni/Audio" element={<Audio />} />
    </Routes>
  );
};

export default Game;
