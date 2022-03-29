import "./Opzioni.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Opzioni = () => {
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
          <div className="actionBtnOpz audioBtn">AUDIO</div>
        </Link>
        <div className="spacerXBtns"></div>
        <Link to="/">
          <div className="actionBtnOpz indietroBtn">INDIETRO</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Opzioni;
