import React, { useContext } from "react";
import { gameContext } from "../Hooks/useContext";

const Player = (props) => {
  const { playerRef } = useContext(gameContext);

  return (
    <img
      className="playerImg"
      src={props.defaultImg}
      alt={"player"}
      style={{ display: "none" }}
      ref={playerRef}
    />
  );
};

export default Player;
