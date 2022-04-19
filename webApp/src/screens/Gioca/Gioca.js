import "./Gioca.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { gameContext } from "../../Hooks/useContext";

import Player from "../../Components/Player";
import usePlayer from "../../Hooks/usePlayer";

import PauseMenu from "../../Components/PauseManu/PauseManu";
import usePauseMenu from "../../Hooks/usePauseMenu";

const Gioca = () => {
  const { gameAreaRef, playerRef } = useContext(gameContext);
  const [getPlayerXY, getPlayerImgXY, playerController] = usePlayer(
    playerRef,
    10
  );
  const mapRef = useRef(null);

  const [showPauseMenu, pauseMenuController] = usePauseMenu("escape");

  useEffect(() => {
    const ctx = gameAreaRef.current.getContext("2d");

    window.addEventListener("keyup", (e) => {
      let pressedKey = e.key.toLowerCase();

      if (!showPauseMenu) {
        playerController(pressedKey);
      }

      pauseMenuController(pressedKey);
    });

    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.fillStyle = "#e5b62e";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.save();
      ctx.translate(-getPlayerXY("x"), -getPlayerXY("y"));

      ctx.drawImage(mapRef.current, 0, 0, 496 * 3, 336 * 3);
      ctx.restore();

      ctx.drawImage(
        playerRef.current,
        getPlayerImgXY("x"),
        getPlayerImgXY("y")
      );
    }, 1000 / 60);
    return () => {
      clearInterval(gameLoop);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contenitoreGioco"
      >
        {showPauseMenu ? (
          <PauseMenu pauseMenuController={pauseMenuController} />
        ) : null}
        <canvas
          className="gameCanvas"
          ref={gameAreaRef}
          width={1150}
          height={650}
        >
          <Player defaultImg="/img/player/Down/2.png" />
          <img
            ref={mapRef}
            src="./img/map/chimica1.png"
            style={{ display: "none" }}
          />
        </canvas>
      </motion.div>
    </div>
  );
};

export default Gioca;
