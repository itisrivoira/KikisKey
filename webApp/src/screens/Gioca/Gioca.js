import "./Gioca.css";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { gameContext } from "../../Hooks/useContext";

import Player from "../../Components/Player";
import usePlayer from "../../Hooks/usePlayer";

const Gioca = () => {
  const { gameAreaRef, playerRef } = useContext(gameContext);
  const [getPlayerXY, getPlayerImgXY, playerController] = usePlayer(
    playerRef,
    10
  );

  useEffect(() => {
    const ctx = gameAreaRef.current.getContext("2d");

    window.addEventListener("keydown", (e) => {
      let pressedKey = e.key.toLowerCase();
      playerController(pressedKey);
    });

    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.fillStyle = "#e5b62e";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.drawImage(
        playerRef.current,
        getPlayerImgXY("x"),
        getPlayerImgXY("y")
      );

      ctx.save();
      ctx.translate(-getPlayerXY("x"), -getPlayerXY("y"));

      ctx.restore();
    }, 1000 / 60);
    return () => {
      clearInterval(gameLoop);
    };
  }, []);

  return (
    <div className="contenitoreGioco">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <canvas
          className="gameCanvas"
          ref={gameAreaRef}
          width={1150}
          height={650}
        >
          <Player defaultImg="/img/player/Down/2.png" />
        </canvas>
      </motion.div>
    </div>
  );
};

export default Gioca;
