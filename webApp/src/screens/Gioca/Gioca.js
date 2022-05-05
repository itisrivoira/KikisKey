import "./Gioca.css";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useContext, useEffect } from "react";

//importo componenti
import Player from "../../Components/Player/Player";
import Stanza from "../../Components/Stanza/Stanza";
import PauseMenu from "../../Components/PauseManu/PauseManu";
import Inventario from "../../Components/Inventario/Inventario";

//importo custom hooks
import { gameContext } from "../../Hooks/useContext";
import useClamp from "../../Hooks/useClamp";
import usePlayer from "../../Hooks/usePlayer";
import useStanze from "../../Hooks/useStanze";
import usePauseMenu from "../../Hooks/usePauseMenu";
import useInventario from "../../Hooks/useInventario";

const Gioca = () => {
  // creo variabili passati dai custom hooks importati
  const { playerRef, stanzaLayer1Ref, stanzaLayer2Ref } =
    useContext(gameContext);
  const { clamp } = useClamp();
  const { setPlayer, getPlayer, playerController } = usePlayer();
  const { getStanzaCorrente } = useStanze();
  const { showPauseMenu, pauseMenuController } = usePauseMenu("escape");
  const {
    showInventario,
    inventarioController,
    aggiungiOggetto,
    rimuoviOggetto,
  } = useInventario("e", 6);

  // creo varibili appartenenti a quello componente
  const canvasRef = useRef(null);
  const DialogBoxRef = useRef(null);

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

      //console.log("playerX: " + getPlayer("x") + " " + "playerY: " + getPlayer("y"));

      //draw here
      ctx.drawImage(stanzaLayer1Ref.current, 96, 96);
      ctx.drawImage(playerRef.current, getPlayer("x"), getPlayer("y"));
      ctx.drawImage(stanzaLayer2Ref.current, 0, 0);
    }, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
    };
  });

  useEffect(() => {
    let aggiuntoCloro = false;
    let aggiuntoIdrogeno = false;
    let creatoAcido = false;
    const gameController = (event) => {
      let pressedKey = event.key.toLowerCase();

      pauseMenuController(pressedKey);

      if (!showPauseMenu) {
        playerController(pressedKey);
        inventarioController(pressedKey);
      }

      //livello 1
      if (
        getPlayer("x") === 288 &&
        getPlayer("y") === 144 &&
        getStanzaCorrente().name === "chimica1" &&
        pressedKey === " " &&
        aggiuntoCloro === false
      ) {
        aggiungiOggetto("Cloro");
        aggiuntoCloro = true;
        DialogBoxRef.current.innerText = "Trovato Cloro!";
      }

      if (
        getPlayer("x") === 672 &&
        getPlayer("y") === 144 &&
        getStanzaCorrente().name === "chimica2" &&
        pressedKey === " " &&
        aggiuntoIdrogeno === false
      ) {
        aggiungiOggetto("Idrogeno");
        aggiuntoIdrogeno = true;
        DialogBoxRef.current.innerText = "Trovato Idrogeno!";
      }

      if (
        getPlayer("x") === 1056 &&
        getPlayer("y") === 144 &&
        getStanzaCorrente().name === "chimica1" &&
        pressedKey === " " &&
        aggiuntoCloro === true &&
        aggiuntoIdrogeno === true
      ) {
        aggiungiOggetto("Acido");
        rimuoviOggetto("Cloro");
        rimuoviOggetto("Idrogeno");
        creatoAcido = true;
        DialogBoxRef.current.innerText = "Creato Acido!";
      }

      if (
        getPlayer("x") === 1296 &&
        getPlayer("y") === 960 &&
        creatoAcido === true &&
        getStanzaCorrente().name === "chimica2" &&
        pressedKey === " "
      ) {
        rimuoviOggetto("Acido");
        DialogBoxRef.current.innerText = "Porta Aperta";
        console.log("porta aperta");
      }
    };

    window.addEventListener("keydown", gameController);
    return () => window.removeEventListener("keydown", gameController);
  }, [showPauseMenu]);

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
          <Player defaultImg="/img/player/down/2.png" />
          <Stanza
            defaultImg1="/img/stanze/chimica1/layer1.png"
            defaultImg2="/img/stanze/chimica1/layer2.png"
          />
        </canvas>
        <div ref={DialogBoxRef} className="dialogBox"></div>
      </motion.div>
    </div>
  );
};

export default Gioca;
