import "./Gioca.css";
import React from "react";
import { useRef, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

//importo componenti
import Character from "../../Components/Character/Character";
import Stanza from "../../Components/Stanza/Stanza";
import Oggetto from "../../Components/Oggetto/Oggetto";
import InfoScreen from "../../Components/InfoScreen/InfoScreen";
import PauseMenu from "../../Components/PauseManu/PauseManu";
import Inventario from "../../Components/Inventario/Inventario";
import Mani from "../../Components/Mani/Mani";
import MisteriosoScreen from "../../Components/MisteriosoScreen/MisteriosoScreen";
import QuizScreen from "../../Components/QuizScreen/QuizScreen";
import DistributoreScreen from "../../Components/DistributoreScreen/DistributoreScreen";
import ComputerScreen from "../../Components/ComputerScreen/ComputerScreen";
import CodiceScreen from "../../Components/CodiceScreen/CodiceScreen";
import ServerScreen from "../../Components/ServerScreen/ServerScreen";
import AscensoreScreen from "../../Components/AscensoreScreen/AscensoreScreen";
import GameClock from "../../Components/GameClock/GameClock";

//importo custom hooks
import { gameContext } from "../../Hooks/useContext";
import useClamp from "../../Hooks/useClamp";
import usePlayer from "../../Hooks/usePlayer";
import useStanze from "../../Hooks/useStanze";
import usePauseMenu from "../../Hooks/usePauseMenu";
import useInventario from "../../Hooks/useInventario";
import useMani from "../../Hooks/useMani";
import useQuizScreen from "../../Hooks/useQuizScreen";
import useInteract from "../../Hooks/useInteract";
import AscensoreTime from "../../Components/AscensoreTime/AscensoreTime";
import GameCompleted from "../../Components/GameCompleted/GameCompleted";

const Gioca = () => {
  // creo le variabili e le funzionni passati dai custom hooks importati
  const {
    gameData,
    playerRef,
    stanzaLayer1Ref,
    stanzaLayer2Ref,
    setIsGameTimeRunning,
    showMisteriosoScreen,
    showQuizScreen,
    showDistributoreScreen,
    showDistributoreScreenRef,
    showComputerScreen,
    showComputerScreenRef,
    showCodiceScreen,
    showCodiceScreenRef,
    showServerScreen,
    showServerScreenRef,
    showAscensoreScreen,
    showAscensoreScreenRef,
    showAscensoreTime,
    showInfoScreen,
    setShowInfoScreen,
    setInfoScreenText,
    luci,
    showGameCompletedScreen,
    showGameCompletedScreenRef,
  } = useContext(gameContext);

  const { clamp } = useClamp();
  const { setPlayer, getPlayer, playerController } = usePlayer();
  const { getStanzaCorrente, setPortaStanza, setNameStanza } = useStanze();

  const { showPauseMenu, pauseMenuController } = usePauseMenu("escape");
  const { showInventario, inventarioController } = useInventario("e");
  const { maniController } = useMani();
  const { QuizScreenController } = useQuizScreen(" ");

  const { interactController } = useInteract(" ");

  // creo varibili appartenenti a quello componente
  const canvasRef = useRef(null);
  const monetaComuneRef = useRef(null);
  const finestraRottaRef = useRef(null);
  const projectorLightRef = useRef(null);
  const cesareTxtRef = useRef(null);
  const outTilesAscensoreRef = useRef(null);
  const leftDoorAscensoreRef = useRef(null);
  const rightDoorAscensoreRef = useRef(null);

  let timeoutInfoScreen = null;
  let showInfoScreenCap1 = true;
  let showInfoScreenCap2 = true;
  let showInfoScreenCap3 = true;
  let showInfoScreenFinalCap = true;

  let timeoutAscensore = null;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    const gameLoop = setInterval(() => {
      //clear the transformations and clear the canvas
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // player is clamped to the world boundaries - don't let the player leave
      setPlayer(
        "x",
        clamp(
          getPlayer("x"),
          getStanzaCorrente().dim.minX,
          getStanzaCorrente().dim.maxX - getPlayer("size") * 2
        )
      );

      setPlayer(
        "y",
        clamp(
          getPlayer("y"),
          getStanzaCorrente().dim.minY,
          getStanzaCorrente().dim.maxY - getPlayer("size") * 2
        )
      );

      console.log("x: " + getPlayer("x") + " y: " + getPlayer("y"));

      let camX = clamp(
        getPlayer("x") - canvasWidth / 2,
        getStanzaCorrente().dim.minX,
        getStanzaCorrente().dim.maxX - canvasWidth
      );

      let camY = clamp(
        getPlayer("y") - canvasHeight / 2,
        getStanzaCorrente().dim.minY,
        getStanzaCorrente().dim.maxY - canvasHeight
      );

      ctx.translate(-camX, -camY);

      //draw here
      if (getStanzaCorrente().name === "ascensore") {
        ctx.drawImage(outTilesAscensoreRef.current, 435, 96);
        ctx.drawImage(
          leftDoorAscensoreRef.current,
          gameData.current.ascensore.door.leftCurrentX,
          95
        );
        ctx.drawImage(
          rightDoorAscensoreRef.current,
          gameData.current.ascensore.door.rightCurrentX,
          95
        );
      }

      ctx.drawImage(stanzaLayer1Ref.current, 96, 96); //disegno stanza layer 1

      if (
        getStanzaCorrente().name === "aula1" &&
        gameData.current.monetaComuneRaccolta === false
      ) {
        ctx.drawImage(monetaComuneRef.current, 790, 700);
      }

      if (
        getStanzaCorrente().name === "corridoio" &&
        gameData.current.finestraRotta === true
      ) {
        ctx.drawImage(finestraRottaRef.current, 2780, 960);
      }

      if (
        getStanzaCorrente().name === "aula5" &&
        gameData.current.isProjectorOn === true
      ) {
        ctx.drawImage(cesareTxtRef.current, 980, 110);
      }

      ctx.drawImage(playerRef.current, getPlayer("x"), getPlayer("y")); //disegno player

      if (
        getStanzaCorrente().name === "aula5" &&
        gameData.current.isProjectorOn === true
      ) {
        ctx.drawImage(projectorLightRef.current, 908, 180);
      }

      ctx.drawImage(stanzaLayer2Ref.current, 0, 0); //disegno stanza layer 2

      //capitoli screens

      //capitolo 1 screen
      if (gameData.current.startedCapitoli.uno && showInfoScreenCap1) {
        setInfoScreenText("Capitolo 1: lab chimica");
        setShowInfoScreen(true);

        timeoutInfoScreen = setTimeout(() => {
          setShowInfoScreen(false);
          setInfoScreenText("");
          showInfoScreenCap1 = false;
        }, 2000);
      }

      //capitolo 2 screen
      if (
        gameData.current.startedCapitoli.due &&
        showInfoScreenCap2 &&
        getStanzaCorrente().name === "corridoio" &&
        getPlayer("x") === 1344 &&
        getPlayer("y") === 2544
      ) {
        setInfoScreenText("Capitolo 2: Il personaggio misterioso");
        setShowInfoScreen(true);

        timeoutInfoScreen = setTimeout(() => {
          setShowInfoScreen(false);
          setInfoScreenText("");
          showInfoScreenCap2 = false;
        }, 2500);
      }

      //capitolo 3 screen
      if (
        gameData.current.startedCapitoli.tre &&
        showInfoScreenCap3 &&
        getStanzaCorrente().name === "bidelleria" &&
        gameData.current.finestraRotta &&
        getPlayer("x") === 720 &&
        getPlayer("y") === 816
      ) {
        setInfoScreenText("Capitolo 3: La bidelleria");
        setShowInfoScreen(true);

        timeoutInfoScreen = setTimeout(() => {
          setShowInfoScreen(false);
          setInfoScreenText("");
          showInfoScreenCap3 = false;
        }, 2500);
      }

      //showInfoScreenFinalCap capitolo finale screen
      if (showInfoScreenFinalCap && getStanzaCorrente().name === "ascensore") {
        setInfoScreenText("Capitolo finale: kiki's key");
        setShowInfoScreen(true);

        timeoutInfoScreen = setTimeout(() => {
          setShowInfoScreen(false);
          setInfoScreenText("");
          showInfoScreenFinalCap = false;
        }, 2500);
      }
    }, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
      clearTimeout(timeoutInfoScreen);
    };
  }, []);

  useEffect(() => {
    const ascensoreInterval = setInterval(() => {
      if (gameData.current.ascensore.piano.requested !== null) {
        gameData.current.ascensore.interactAscController = false;
        if (gameData.current.ascensore.door.leftCurrentX < 483) {
          gameData.current.ascensore.door.leftCurrentX += 1;
        }
        if (gameData.current.ascensore.door.rightCurrentX > 576) {
          gameData.current.ascensore.door.rightCurrentX -= 1;
        }

        timeoutAscensore = setTimeout(() => {
          gameData.current.ascensore.piano.current =
            gameData.current.ascensore.piano.prev;

          gameData.current.ascensore.piano.requested = null;

          if (gameData.current.ascensore.piano.current === 2) {
            setNameStanza("ascensore", 0, "corridoio2", [576, 1200]);
            setNameStanza("ascensore", 1, "corridoio2", [528, 1200]);
            setNameStanza("ascensore", 2, "corridoio2", [624, 1200]);
          } else {
            setNameStanza("ascensore", 0, "corridoio", [3936, 3216]);
            setNameStanza("ascensore", 1, "corridoio", [3888, 3216]);
            setNameStanza("ascensore", 2, "corridoio", [3984, 3216]);
          }

          setPortaStanza("ascensore", 0, false);
          setPortaStanza("ascensore", 1, false);
          setPortaStanza("ascensore", 2, false);

          setTimeout(() => {
            gameData.current.ascensore.interactAscController = true;
          }, 4000);
        }, 6000);
      }

      if (gameData.current.ascensore.piano.requested === null) {
        if (gameData.current.ascensore.door.leftCurrentX > 390) {
          gameData.current.ascensore.door.leftCurrentX -= 1;
        }
        if (gameData.current.ascensore.door.rightCurrentX < 670) {
          gameData.current.ascensore.door.rightCurrentX += 1;
        }
      }
    }, 20);

    return () => {
      clearInterval(ascensoreInterval);
      clearTimeout(timeoutAscensore);
    };
  }, []);

  useEffect(() => {
    const gameController = (event) => {
      let pressedKey = event.key.toLowerCase();
      pauseMenuController(pressedKey);

      if (!showPauseMenu && pressedKey === "escape") {
        setIsGameTimeRunning(false);
      } else {
        setIsGameTimeRunning(true);
      }

      if (!showPauseMenu) {
        if (
          !showQuizScreen &&
          !showMisteriosoScreen &&
          !showDistributoreScreenRef.current &&
          !showComputerScreenRef.current &&
          !showCodiceScreenRef.current &&
          !showServerScreenRef.current &&
          !showAscensoreScreenRef.current &&
          !showGameCompletedScreenRef.current
        ) {
          playerController(pressedKey);
          inventarioController(pressedKey);
          maniController(pressedKey);
        }

        QuizScreenController(pressedKey, getPlayer("x"), getPlayer("y"));
        interactController(pressedKey, getPlayer("x"), getPlayer("y"));
      }
    };

    window.addEventListener("keydown", gameController);
    return () => window.removeEventListener("keydown", gameController);
  }, [showPauseMenu, showQuizScreen, showMisteriosoScreen]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contenitoreGioco"
      >
        <GameClock />
        {showMisteriosoScreen ? <MisteriosoScreen /> : null}
        {showQuizScreen ? <QuizScreen /> : null}
        {showCodiceScreen ? <CodiceScreen /> : null}
        {showServerScreen ? <ServerScreen /> : null}
        {showAscensoreScreen ? <AscensoreScreen /> : null}
        {showAscensoreTime ? <AscensoreTime /> : null}
        {showComputerScreen ? <ComputerScreen /> : null}
        {showDistributoreScreen ? <DistributoreScreen /> : null}
        {showInventario ? <Inventario /> : null}
        {showInfoScreen ? <InfoScreen /> : null}
        {!luci ? <div className="luciOff" /> : null}
        {showGameCompletedScreen ? <GameCompleted /> : null}
        {showPauseMenu ? <PauseMenu controller={pauseMenuController} /> : null}
        <canvas className="canvas" ref={canvasRef} width={1152} height={672}>
          <Character
            characterRef={playerRef}
            defaultImg="/KikisKeyWebGame/img/characters/kiki/down/1.png"
          />
          <Stanza
            defaultImg1="/KikisKeyWebGame/img/stanze/chimica1/layer1.png"
            defaultImg2="/KikisKeyWebGame/img/stanze/chimica1/layer2.png"
          />
          <Oggetto
            oggettoRef={monetaComuneRef}
            img="/KikisKeyWebGame/img/oggetti/Moneta Comune.png"
          />
          <Oggetto
            oggettoRef={finestraRottaRef}
            img="/KikisKeyWebGame/img/misc/finestraRotta.png"
          />
          <Oggetto
            oggettoRef={projectorLightRef}
            img="/KikisKeyWebGame/img/misc/projectorLight.png"
          />
          <Oggetto
            oggettoRef={cesareTxtRef}
            img="/KikisKeyWebGame/img/misc/cesare.png"
          />
          <Oggetto
            oggettoRef={outTilesAscensoreRef}
            img="/KikisKeyWebGame/img/misc/outTilesAscensore.png"
          />
          <Oggetto
            oggettoRef={leftDoorAscensoreRef}
            img="/KikisKeyWebGame/img/misc/leftDoorAscensore.png"
          />
          <Oggetto
            oggettoRef={rightDoorAscensoreRef}
            img="/KikisKeyWebGame/img/misc/rightDoorAscensore.png"
          />
        </canvas>
        <Mani />
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Gioca;
