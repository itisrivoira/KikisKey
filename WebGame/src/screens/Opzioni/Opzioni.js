import "./Opzioni.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Opzioni = (props) => {
  return (
    <div className="contenitoreOpz">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        className="contenutoOpz"
        transition={{ duration: 0.4 }}
      >
        <p className="titoloOpz">OPZIONI</p>
        <Link to="/Opzioni/Audio">
          <motion.div
            whileHover={{ scale: 1.025 }}
            className="actionBtnOpz audioBtn"
          >
            AUDIO
          </motion.div>
        </Link>
        <div className="spacerXBtns" />
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.025 }}
            className="actionBtnOpz indietroBtn"
          >
            INDIETRO
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Opzioni;
