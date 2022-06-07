import "./Opzioni.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "react-particle-backgrounds";

const Opzioni = (props) => {
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
    <div className="contenitoreOpz">
      <ParticleBackground
        settings={particleBgSettings}
        className="particlesDiv"
      />
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
