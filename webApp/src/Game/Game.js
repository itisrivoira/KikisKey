import "./Game.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Menu from "../screens/Menu/Menu";
import Gioca from "../screens/Gioca/Gioca";
import Opzioni from "../screens/Opzioni/Opzioni";
import Audio from "../screens/Opzioni/screens/Audio/Audio";

const Game = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<Menu />} />
        <Route path="/Gioca" element={<Gioca />} />
        <Route path="/Opzioni" element={<Opzioni />} />
        <Route path="/Opzioni/Audio" element={<Audio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Game;
