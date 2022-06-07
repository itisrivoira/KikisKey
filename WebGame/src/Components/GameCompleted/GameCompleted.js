import "./GameCompleted.css";
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gameContext } from "../../Hooks/useContext";

const GameCompleted = () => {
  const { gameTime } = useContext(gameContext);

  return (
    <div className="containerGameCompleted">
      <div className="wellDone">WELL DONE</div>
      <span className="score">
        <span>{("0" + Math.floor((gameTime / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((gameTime / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((gameTime / 10) % 100)).slice(-2)}</span>
      </span>

      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.025 }}
          className="actionBtnOpz audioBtn"
        >
          MENU
        </motion.div>
      </Link>
    </div>
  );
};

export default GameCompleted;
