import React, { useContext, useEffect } from "react";
import { gameContext } from "../../Hooks/useContext";

const GameClock = () => {
  const { gameTime, setGameTime, isGameTimeRunning } = useContext(gameContext);

  useEffect(() => {
    let interval;
    if (isGameTimeRunning) {
      interval = setInterval(() => {
        setGameTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isGameTimeRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameTimeRunning]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((gameTime / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((gameTime / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((gameTime / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default GameClock;
