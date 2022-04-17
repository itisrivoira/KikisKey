import "./Game.css";
import { useState, useRef } from "react";

import ReactHowler from "react-howler";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { gameContext } from "../Hooks/useContext";

import Menu from "../screens/Menu/Menu";
import Gioca from "../screens/Gioca/Gioca";
import Opzioni from "../screens/Opzioni/Opzioni";
import Audio from "../screens/Opzioni/screens/Audio/Audio";

const Game = () => {
  const location = useLocation();

  const [musicaOn, setMusicaOn] = useState(false);
  const gameAreaRef = useRef(null);
  const playerRef = useRef(null);

  const gameData = {
    stanzaCorrente: "labChimica1",
  };

  return (
    <>
      <ReactHowler src="/audio/musicaMenu.mp3" playing={musicaOn} loop />
      <gameContext.Provider
        value={{
          musicaOn,
          setMusicaOn,
          gameAreaRef,
          playerRef,
          gameData,
        }}
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/*" element={<Menu />} />
            <Route path="/Gioca" element={<Gioca />} />
            <Route path="/Opzioni" element={<Opzioni />} />
            <Route path="/Opzioni/Audio" element={<Audio />} />
          </Routes>
        </AnimatePresence>
      </gameContext.Provider>
    </>
  );
};

export default Game;
