import "./Audio.css";
import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gameContext } from "../../../../Hooks/useContext";

const Audio = () => {
  const { flagMusica, setFlagMusica } = useContext(gameContext);
  const [stileAudioOnBtn, setStileAudioOnBtn] = useState("audioOnBtn filtroBN");
  const [stileAudioOffBtn, setStileAudioOffBtn] = useState("audioOffBtn");

  useEffect(() => {
    cambiaStileAudioBtn(flagMusica);
  }, [flagMusica]);

  const accendiMusica = () => {
    setFlagMusica(true);
    cambiaStileAudioBtn(flagMusica);
  };

  const spegniMusica = () => {
    setFlagMusica(false);
    cambiaStileAudioBtn(flagMusica);
  };

  const cambiaStileAudioBtn = (flag) => {
    if (!flag) {
      setStileAudioOnBtn("audioOnBtn filtroBN");
      setStileAudioOffBtn("audioOffBtn");
    } else {
      setStileAudioOnBtn("audioOnBtn");
      setStileAudioOffBtn("audioOffBtn filtroBN");
    }
  };

  return (
    <div className="contenitoreAudio">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        className="contenutoAudio"
        transition={{ duration: 0.4 }}
      >
        <p className="titoloAudio">AUDIO</p>
        <div className="contenitoreAudioBtn">
          <motion.div
            whileHover={{ scale: 1.025 }}
            className={stileAudioOnBtn}
            onClick={accendiMusica}
          />
          <div className="spacerYBtns" />
          <motion.div
            whileHover={{ scale: 1.025 }}
            className={stileAudioOffBtn}
            onClick={spegniMusica}
          />
        </div>
        <div className="spacerXBtns"></div>
        <Link to="/Opzioni">
          <motion.div
            whileHover={{ scale: 1.025 }}
            className="actionBtnAudio indietroBtn"
          >
            INDIETRO
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Audio;
