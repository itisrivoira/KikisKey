import "./Gioca.css";
import React from "react";
import { useRef, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

//importo componenti
import Character from "../../Components/Character/Character";
import Stanza from "../../Components/Stanza/Stanza";
import DialogBox from "../../Components/DialogBox/DialogBox";
import PauseMenu from "../../Components/PauseManu/PauseManu";
import Inventario from "../../Components/Inventario/Inventario";

//importo custom hooks
import { gameContext } from "../../Hooks/useContext";
import useClamp from "../../Hooks/useClamp";
import usePlayer from "../../Hooks/usePlayer";
import useStanze from "../../Hooks/useStanze";
import usePauseMenu from "../../Hooks/usePauseMenu";
import useInventario from "../../Hooks/useInventario";
import useLivello1 from "../../Hooks/livelli/useLivello1";

const Gioca = () => {
  // creo le variabili e le funzionni passati dai custom hooks importati
  const {
    playerRef,
    bidelloRef,
    misteriosoRef,
    stanzaLayer1Ref,
    stanzaLayer2Ref,
  } = useContext(gameContext);

  const { clamp } = useClamp();
  const { setPlayer, getPlayer, playerController } = usePlayer();
  const { getStanzaCorrente } = useStanze();
  const { showPauseMenu, pauseMenuController } = usePauseMenu("escape");
  const { showInventario, inventarioController } = useInventario("e", 6);

  const { startLivello1 } = useLivello1();

  // creo varibili appartenenti a quello componente
  const canvasRef = useRef(null);

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

      console.log(
        "playerX: " + getPlayer("x") + " " + "playerY: " + getPlayer("y")
      );

      //draw here
      ctx.drawImage(stanzaLayer1Ref.current, 96, 96);
      if (getStanzaCorrente().name === "corridoio") {
        ctx.drawImage(misteriosoRef.current, 4128, 144);
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
        playerController(pressedKey);
        inventarioController(pressedKey);
      }
    };

    window.addEventListener("keydown", gameController);
    return () => window.removeEventListener("keydown", gameController);
  }, [showPauseMenu]);

  useEffect(() => {
    const livelloController = (event) => {
      let pressedKey = event.key.toLowerCase();

      //livello 1
      startLivello1(pressedKey, getPlayer("x"), getPlayer("y"));
    };

    window.addEventListener("keydown", livelloController);
    return () => window.removeEventListener("keydown", livelloController);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contenitoreGioco"
      >
        {showInventario ? <Inventario /> : null}

        {showPauseMenu ? (
          <PauseMenu pauseMenuController={pauseMenuController} />
        ) : null}

        <canvas className="canvas" ref={canvasRef} width={1152} height={672}>
          <Stanza
            defaultImg1="/img/stanze/chimica1/layer1.png"
            defaultImg2="/img/stanze/chimica1/layer2.png"
          />
          <Character
            characterRef={playerRef}
            defaultImg="/img/characters/kiki/down/1.png"
          />
          <Character
            characterRef={misteriosoRef}
            defaultImg="/img/characters/misterioso/1.png"
          />
        </canvas>
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Gioca;
