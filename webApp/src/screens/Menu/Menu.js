import "./Menu.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = (props) => {
  return (
    <div className="contenitoreMenu">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        className="contenutoMenu"
        transition={{ duration: 0.4 }}
      >
        <p className="titoloMenu">KIKI'S KEY</p>
        <Link to="/Gioca">
          <motion.div whileHover={{ x: 10 }} className="actionBtnMenu giocaBtn">
            GIOCA
          </motion.div>
        </Link>
        <div className="spacerXBtns" />
        <Link to="/Opzioni">
          <motion.div
            whileHover={{ x: 10 }}
            className="actionBtnMenu opzioniBtn"
          >
            OPZIONI
          </motion.div>
        </Link>
        <div className="spacerXBtns" />
        <Link to="/Classifica">
          <motion.div
            whileHover={{ x: 10 }}
            className="actionBtnMenu classificaBtn"
          >
            CLASSIFICA
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Menu;
