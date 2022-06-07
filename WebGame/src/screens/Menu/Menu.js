import "./Menu.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "react-particle-backgrounds";

const Menu = (props) => {
  const particleBgSettings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#800850",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0.3,
      maxOpacity: 0.3,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <div className="contenitoreMenu">
      <ParticleBackground
        settings={particleBgSettings}
        className="particlesDiv"
      />
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
