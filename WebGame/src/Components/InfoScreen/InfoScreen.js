import "./InfoScreen.css";
import React, { useContext } from "react";
import { gameContext } from "../../Hooks/useContext";
import { motion } from "framer-motion";

const InfoScreen = () => {
  const { infoScreenText, luci } = useContext(gameContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="contenitoreInfoScreen"
      style={{
        backgroundColor: luci ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
      }}
    >
      <p className="contenutoInfoScreen">{infoScreenText}</p>
    </motion.div>
  );
};

export default InfoScreen;
