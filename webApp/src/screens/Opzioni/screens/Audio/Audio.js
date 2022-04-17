import "./Audio.css";
import { useContext, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gameContext } from "../../../../Hooks/useContext";

const Audio = () => {
  const { setMusicaOn } = useContext(gameContext);

  const [stileAudioOnBtn, setStileAudioOnBtn] = useState("audioOnBtn filtroBN");
  const [stileAudioOffBtn, setStileAudioOffBtn] = useState("audioOffBtn");

  const accendiMusica = () => {
    setMusicaOn(true);
    setStileAudioOnBtn("audioOnBtn");
    setStileAudioOffBtn("audioOffBtn filtroBN");
  };

  const spegniMusica = () => {
    setMusicaOn(false);
    setStileAudioOnBtn("audioOnBtn filtroBN");
    setStileAudioOffBtn("audioOffBtn");
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
