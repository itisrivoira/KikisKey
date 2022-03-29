import "./Gioca.css";
import { motion } from "framer-motion";

const Gioca = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      className="contenutoMenu"
      transition={{ duration: 0.4 }}
    >
      <div>gioca</div>
    </motion.div>
  );
};

export default Gioca;
