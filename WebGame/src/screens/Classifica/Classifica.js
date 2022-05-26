import "./Classifica.css";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Classifica = () => {
  return (
    <div className="contenitoreClassifica">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        className="contenutoClassifica"
        transition={{ duration: 0.4 }}
      >
        <p className="titoloClassifica">CLASSIFICA</p>
        <div class="contenitoreTabella">
          <ul class="responsiveTabella">
            <li class="table-header">
              <div class="col col-1">ID</div>
              <div class="col col-2">NICKNAME</div>
              <div class="col col-3">TEMPO</div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="ID">
                1
              </div>
              <div class="col col-2" data-label="NiCKNAME">
                yoyo
              </div>
              <div class="col col-3" data-label="TEMPO">
                5:50
              </div>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="contenitoreActionBtns">
            <motion.div
              whileHover={{ scale: 1.025 }}
              className="actionBtnClassifica indietroBtn"
            >
              INDIETRO
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Classifica;
