import "./Game.css";
import { useRef, useState } from "react";

// importo librerie esterne
import { Route, Routes, useLocation } from "react-router-dom";
import ReactHowler from "react-howler";
import { AnimatePresence } from "framer-motion";

// importo i componenti
import Menu from "../screens/Menu/Menu";
import Gioca from "../screens/Gioca/Gioca";
import Opzioni from "../screens/Opzioni/Opzioni";
import Classifica from "../screens/Classifica/Classifica";
import Audio from "../screens/Opzioni/screens/Audio/Audio";

// importo object literal(all'inizio vuoto) che conterrà i variabili globali
import { gameContext } from "../Hooks/useContext";

const Game = () => {
  const location = useLocation();

  // creo i variabili globali
  const [flagMusica, setFlagMusica] = useState(false);
  const playerRef = useRef(null);
  const bidelloRef = useRef(null);
  const misteriosoRef = useRef(null);
  const stanzaLayer1Ref = useRef(null);
  const stanzaLayer2Ref = useRef(null);
  const [msgDialogBox, setMsgDialogBox] = useState("");

  const [inventario, setInventario] = useState([
    [false, "", 0], //[flagOggetto, nomeOggetto, quantitaOggetto]
    [false, "", 0],
    [false, "", 0],
    [false, "", 0],
    [false, "", 0],
    [false, "", 0],
  ]);

  const gameData = useRef({
    stanzaCorrente: "chimica1",
    livelloCorrente: 1,
  });

  return (
    <>
      {/*componente per accendere la musica*/}
      <ReactHowler src="/audio/musicaMenu.mp3" playing={flagMusica} loop />

      {/*componente provider restituito dal gameContext per fornire i variabili globali agli altri componenti*/}
      <gameContext.Provider
        value={{
          flagMusica,
          setFlagMusica,
          playerRef,
          bidelloRef,
          misteriosoRef,
          stanzaLayer1Ref,
          stanzaLayer2Ref,
          msgDialogBox,
          setMsgDialogBox,
          inventario,
          setInventario,
          gameData,
        }}
      >
        {/*componente per consentire animazione tra i componenti*/}
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            {/*Route: utilizzato per assegnare un path ad un componente esistente*/}
            <Route path="/*" element={<Menu />} />
            <Route path="/Gioca" element={<Gioca />} />
            <Route path="/Opzioni" element={<Opzioni />} />
            <Route path="/Classifica" element={<Classifica />} />
            <Route path="/Opzioni/Audio" element={<Audio />} />
          </Routes>
        </AnimatePresence>
      </gameContext.Provider>
    </>
  );
};

export default Game;
