import "./Audio.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Audio = () => {
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
          <div className="audioOnBtn"></div>
          <div className="spacerYBtns"></div>
          <div className="audioOffBtn"></div>
        </div>
        <div className="spacerXBtns"></div>
        <Link to="/Opzioni">
          <div className="actionBtnAudio indietroBtn">INDIETRO</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Audio;
