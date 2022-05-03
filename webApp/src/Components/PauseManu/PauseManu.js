import "./PauseManu.css";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PauseMenu = (props) => {
  const riprendi = () => {
    props.pauseMenuController("escape");
  };

  return (
    <div className="contenitorePauseManu">
      <p className="titoloPauseManu">PAUSED</p>
      <Link to="/Menu">
        <motion.div
          whileHover={{ scale: 1.025 }}
          className="actionBtnPauseMenu menuBtn"
        >
          MENU
        </motion.div>
      </Link>

      <motion.div
        whileHover={{ scale: 1.025 }}
        className="actionBtnPauseMenu riprendiBtn"
        onClick={riprendi}
      >
        REPRENDI
      </motion.div>
    </div>
  );
};

export default PauseMenu;
