import "./Gioca.css";
import React from "react";
import { useRef, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

//importo componenti
import Character from "../../Components/Character/Character";
import Stanza from "../../Components/Stanza/Stanza";
import Oggetto from "../../Components/Oggetto/Oggetto";
import PauseMenu from "../../Components/PauseManu/PauseManu";
import Inventario from "../../Components/Inventario/Inventario";
import Mani from "../../Components/Mani/Mani";
import MisteriosoScreen from "../../Components/MisteriosoScreen/MisteriosoScreen";
import QuizScreen from "../../Components/QuizScreen/QuizScreen";
import DistributoreScreen from "../../Components/DistributoreScreen/DistributoreScreen";

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

const Gioca = () => {
  // creo le variabili e le funzionni passati dai custom hooks importati
  const {
    gameData,
    playerRef,
    stanzaLayer1Ref,
    stanzaLayer2Ref,
    showMisteriosoScreen,
    showQuizScreen,
    showDistributoreScreen,
  } = useContext(gameContext);

  const { clamp } = useClamp();
  const { setPlayer, getPlayer, playerController } = usePlayer();
  const { getStanzaCorrente } = useStanze();

  const { showPauseMenu, pauseMenuController } = usePauseMenu("escape");
  const { showInventario, inventarioController } = useInventario("e");
  const { maniController } = useMani();
  const { QuizScreenController } = useQuizScreen(" ");

  const { interactController } = useInteract(" ");

  // creo varibili appartenenti a quello componente
  const canvasRef = useRef(null);
  const monetaComuneRef = useRef(null);
  const finestraRottaRef = useRef(null);

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
      ctx.drawImage(stanzaLayer1Ref.current, 96, 96);

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

      ctx.drawImage(playerRef.current, getPlayer("x"), getPlayer("y"));
      ctx.drawImage(stanzaLayer2Ref.current, 0, 0);
    }, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
    };
  });

  useEffect(() => {
    const gameController = (event) => {
      let pressedKey = event.key.toLowerCase();
      pauseMenuController(pressedKey);

      if (!showPauseMenu) {
        if (!showQuizScreen && !showMisteriosoScreen) {
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
        {showMisteriosoScreen ? <MisteriosoScreen /> : null}
        {showQuizScreen ? <QuizScreen /> : null}
        {showDistributoreScreen ? <DistributoreScreen /> : null}
        {showInventario ? <Inventario /> : null}
        {showPauseMenu ? <PauseMenu controller={pauseMenuController} /> : null}

        <canvas className="canvas" ref={canvasRef} width={1152} height={672}>
          <Character
            characterRef={playerRef}
            defaultImg="/img/characters/kiki/down/1.png"
          />
          <Stanza
            defaultImg1="/img/stanze/chimica1/layer1.png"
            defaultImg2="/img/stanze/chimica1/layer2.png"
          />
          <Oggetto
            oggettoRef={monetaComuneRef}
            img="/img/oggetti/monetaComune.png"
          />
          <Oggetto
            oggettoRef={finestraRottaRef}
            img="/img/misc/finestraRotta.png"
          />
        </canvas>
        <Mani />
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Gioca;
