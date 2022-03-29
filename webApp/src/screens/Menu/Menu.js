import "./Menu.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
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
          <div className="actionBtnMenu giocaBtn">GIOCA</div>
        </Link>
        <div className="spacerXBtns"></div>
        <Link to="/Opzioni">
          <div className="actionBtnMenu opzioniBtn">OPZIONI</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Menu;
