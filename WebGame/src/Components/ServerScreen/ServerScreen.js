import "./ServerScreen.css";
import React, { useContext } from "react";
import { gameContext } from "../../Hooks/useContext";

const ServerScreen = () => {
  const { setIsServerOn, isServerOn } = useContext(gameContext);

  const toggleSever = () => {
    setIsServerOn((prev) => !prev);
  };

  return (
    <div className="contenitoreServer">
      <p className="titoloServer">Server</p>
      <div className="server">
        <div className="serverBtn" onClick={toggleSever}></div>
        <div className="serverBtnBack"></div>

        <div
          className="serverLight sl1"
          style={{ backgroundColor: isServerOn ? "#6BD138" : "#7980A0" }}
        ></div>
        <div
          className="serverLight sl2"
          style={{ backgroundColor: isServerOn ? "#6BD138" : "#7980A0" }}
        ></div>
        <div
          className="serverLight sl3"
          style={{ backgroundColor: isServerOn ? "#6BD138" : "#7980A0" }}
        ></div>
      </div>
    </div>
  );
};

export default ServerScreen;
