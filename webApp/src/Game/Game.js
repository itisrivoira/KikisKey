import "./Game.css";
import { useRef, useState } from "react";

// importo librerie esterne
import { Route, Routes, useLocation } from "react-router-dom";
import ReactHowler from "react-howler";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { AnimatePresence } from "framer-motion";

// importo i componenti
import Menu from "../screens/Menu/Menu";
import Gioca from "../screens/Gioca/Gioca";
import Opzioni from "../screens/Opzioni/Opzioni";
import Classifica from "../screens/Classifica/Classifica";
import Audio from "../screens/Opzioni/screens/Audio/Audio";

// importo object literal(all'inizio vuoto) che conterrà i variabili globali
import { gameContext } from "../Hooks/useContext";

import useStanzeData from "../Hooks/useStanzeData";

const Game = () => {
  const location = useLocation();

  // creo i variabili globali
  const [flagMusica, setFlagMusica] = useState(false);

  const playerRef = useRef(null);
  const misteriosoRef = useRef(null);
  const secondario1Ref = useRef(null);
  const secondario2Ref = useRef(null);

  const { stanze } = useStanzeData();
  const stanzaLayer1Ref = useRef(null);
  const stanzaLayer2Ref = useRef(null);
  const [msgDialogBox, setMsgDialogBox] = useState("");

  const [playerItems, setPlayerItems] = useState([
    { id: 0, itemName: "" },
    { id: 1, itemName: "" },
    { id: 2, itemName: "" },
    { id: 3, itemName: "" },
    { id: 4, itemName: "" },
    { id: 5, itemName: "" },
    { id: 6, itemName: "" },
    { id: 7, itemName: "" },
  ]);
  const [manoSelezionata, setManoSelezionata] = useState(1);

  const [misteriosoItems, setMisteriosoItems] = useState([
    { itemScambio: "Patate", itemOfferto: "Martello" },
    { itemScambio: "Badge", itemOfferto: "ID" },
  ]);

  const [showMisteriosoScreen, setShowMisteriosoScreen] = useState(false);
  const [showQuizScreen, setShowQuizScreen] = useState(false);
  const [showDistributoreScreen, setShowDistributoreScreen] = useState(false);

  const gameData = useRef({
    stanzaCorrente: "chimica1",
    capitoloCorrente: 1,
    quizCorrente: {
      nomeQuiz: "",
      domanda: "",
      risposta: "",
      ricompensa: "",
    },

    trovatoCloro: false,
    trovatoIdrogeno: false,
    creatoAcido: false,
    portaSciolta: false,
    monetaComuneRaccolta: false,
    finestraRotta: false,
  });

  return (
    <>
      {/*componente per accendere la musica*/}
      <ReactHowler src="/audio/musicaMenu.mp3" playing={flagMusica} loop />

      {/*componente provider restituito dal gameContext per fornire i variabili globali agli altri componenti*/}
      <DndProvider backend={HTML5Backend}>
        <gameContext.Provider
          value={{
            flagMusica,
            setFlagMusica,
            playerRef,
            misteriosoRef,
            secondario1Ref,
            secondario2Ref,
            stanze,
            stanzaLayer1Ref,
            stanzaLayer2Ref,
            msgDialogBox,
            setMsgDialogBox,
            playerItems,
            setPlayerItems,
            manoSelezionata,
            setManoSelezionata,
            misteriosoItems,
            setMisteriosoItems,
            showMisteriosoScreen,
            setShowMisteriosoScreen,
            showQuizScreen,
            setShowQuizScreen,
            showDistributoreScreen,
            setShowDistributoreScreen,
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
      </DndProvider>
    </>
  );
};

export default Game;
