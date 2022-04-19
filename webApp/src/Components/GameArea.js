import React from "react";
import { useRef, useEffect, useContext } from "react";
import { gameContext } from "../Hooks/useContext";

import useGameArea from "../Hooks/useGameArea";

import Player from "./Player";
import usePlayer from "../Hooks/usePlayer";

const GameArea = () => {
  const { gameAreaRef, playerRef } = useContext(gameContext);

  const [gameAreaWidth] = useGameArea(gameAreaRef);
  console.log(gameAreaWidth);

  const [getPlayerX, getPlayerY, playerController] = usePlayer(playerRef, 10);

  useEffect(() => {
    const ctx = gameAreaRef.current.getContext("2d");

    window.addEventListener("keydown", (e) => {
      let pressedKey = e.key.toLowerCase();
      playerController(pressedKey);
    });

    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(playerRef.current, getPlayerX(), getPlayerY());
    }, 1000 / 60);
    return () => {
      clearInterval(gameLoop);
    };
  }, []);

  return (
    <canvas className="gameCanvas" ref={gameAreaRef} width={1150} height={650}>
      <Player defaultImg="/img/player/Down/2.png" />
    </canvas>
  );
};

export default GameArea;
