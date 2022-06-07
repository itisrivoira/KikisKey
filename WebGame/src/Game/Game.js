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
  const manoSelezionataRef = useRef(0);

  const [misteriosoItems, setMisteriosoItems] = useState([
    { itemScambio: "Patatine", itemOfferto: "Martello" },
    { itemScambio: "Bibita", itemOfferto: "ID" },
    { itemScambio: "OctoDuck", itemOfferto: "Forbici" },
  ]);

  const [showMisteriosoScreen, setShowMisteriosoScreen] = useState(false);
  const [showQuizScreen, setShowQuizScreen] = useState(false);

  const [showDistributoreScreen, setShowDistributoreScreen] = useState(false);
  const showDistributoreScreenRef = useRef(false);

  const [showComputerScreen, setShowComputerScreen] = useState(false);
  const showComputerScreenRef = useRef(false);

  const [showCodiceScreen, setShowCodiceScreen] = useState(false);
  const showCodiceScreenRef = useRef(false);

  const [showServerScreen, setShowServerScreen] = useState(false);
  const showServerScreenRef = useRef(false);

  const [showAscensoreScreen, setShowAscensoreScreen] = useState(false);
  const showAscensoreScreenRef = useRef(false);

  const [showAscensoreTime, setShowAscensoreTime] = useState(false);

  const [showInfoScreen, setShowInfoScreen] = useState(false);
  const [infoScreenText, setInfoScreenText] = useState("");

  const [isPcOn, setIsPcOn] = useState(false);
  const [isServerOn, setIsServerOn] = useState(false);

  const [luci, setLuci] = useState(false);
  const [portaBidelleria, setPortaBidelleria] = useState(false);
  const [ascensore, setAscensore] = useState(false);

  const [gameTime, setGameTime] = useState(0);
  const [isGameTimeRunning, setIsGameTimeRunning] = useState(true);

  const [showGameCompletedScreen, setShowGameCompletedScreen] = useState(false);
  const showGameCompletedScreenRef = useRef(false);

  const gameData = useRef({
    stanzaCorrente: "chimica1",
    startedCapitoli: {
      uno: true,
      due: false,
      tre: false,
      final: false,
    },
    quizCorrente: {
      id: null,
      nomeQuiz: "",
      domanda: "",
      risposta: "",
      ricompensa: "",
    },

    trovatoCloro: false,
    trovatoIdrogeno: false,
    creatoAcido: false,
    portaSciolta: false,
    rispostoDomande: [false, false],
    monetaComuneRaccolta: false,
    finestraRotta: false,
    isProjectorOn: false,
    trovataMonetaRaraBidelleria: false,
    ascensore: {
      door: {
        leftCurrentX: 390,
        rightCurrentX: 670,
      },
      piano: {
        current: 1,
        prev: null,
        requested: null,
      },
      interactAscController: true,
    },
  });

  return (
    <>
      {/*componente per accendere la musica*/}
      <ReactHowler
        src="/KikisKeyWebGame/audio/musicaMenu.wav"
        playing={flagMusica}
        loop
      />

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
            gameTime,
            setGameTime,
            isGameTimeRunning,
            setIsGameTimeRunning,
            stanzaLayer1Ref,
            stanzaLayer2Ref,
            msgDialogBox,
            setMsgDialogBox,
            playerItems,
            setPlayerItems,
            manoSelezionata,
            setManoSelezionata,
            manoSelezionataRef,
            misteriosoItems,
            setMisteriosoItems,
            showMisteriosoScreen,
            setShowMisteriosoScreen,
            showQuizScreen,
            setShowQuizScreen,
            showDistributoreScreen,
            setShowDistributoreScreen,
            showDistributoreScreenRef,
            showComputerScreen,
            setShowComputerScreen,
            showComputerScreenRef,
            showCodiceScreen,
            setShowCodiceScreen,
            showCodiceScreenRef,
            showServerScreen,
            setShowServerScreen,
            showServerScreenRef,
            showAscensoreScreen,
            setShowAscensoreScreen,
            showAscensoreScreenRef,
            showInfoScreen,
            setShowInfoScreen,
            infoScreenText,
            setInfoScreenText,
            isPcOn,
            setIsPcOn,
            isServerOn,
            setIsServerOn,
            luci,
            setLuci,
            portaBidelleria,
            setPortaBidelleria,
            ascensore,
            setAscensore,
            showAscensoreTime,
            setShowAscensoreTime,
            showGameCompletedScreen,
            setShowGameCompletedScreen,
            showGameCompletedScreenRef,
            gameData,
          }}
        >
          {/*componente per consentire animazione tra i componenti*/}

          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/*" element={<Menu />} />
              <Route path="/Gioca" element={<Gioca />} />
              <Route path="/Opzioni" element={<Opzioni />} />
              <Route path="/Opzioni/Audio" element={<Audio />} />
              <Route path="/Classifica" element={<Classifica />} />
            </Routes>
          </AnimatePresence>
        </gameContext.Provider>
      </DndProvider>
    </>
  );
};

export default Game;
