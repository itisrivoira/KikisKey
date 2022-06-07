import "./AscensoreTime.css";
import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../../Hooks/useContext";

const AscensoreTime = () => {
  const { gameData } = useContext(gameContext);
  const [ascensoreTime, setAscensoreTime] = useState(7);

  useEffect(() => {
    let ascTimeInterval = setInterval(() => {
      if (gameData.current.ascensore.piano.requested !== null) {
        setAscensoreTime((prev) => prev - 1);
      } else {
        setAscensoreTime(7);
      }
    }, 1000);

    return () => {
      clearInterval(ascTimeInterval);
    };
  }, []);

  return (
    <div className="ascensoreTimeContainer">
      <div className="ascPiano">{gameData.current.ascensore.piano.current}</div>
      <div className="ascTime"> {ascensoreTime !== 7 && ascensoreTime}</div>
    </div>
  );
};

export default AscensoreTime;
