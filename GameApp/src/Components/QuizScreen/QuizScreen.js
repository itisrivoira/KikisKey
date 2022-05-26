import "./QuizScreen.css";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { gameContext } from "../../Hooks/useContext";
import usePlayerItemsManager from "../../Hooks/usePlayerItemsManager";
import useToast from "../../Hooks/useToast";

const QuizScreen = () => {
  const { gameData, setShowQuizScreen } = useContext(gameContext);
  const { aggiungiItem } = usePlayerItemsManager();
  const [risposta, setRisposta] = useState("");
  const { showToast } = useToast();

  const check = () => {
    if (risposta === gameData.current.quizCorrente.risposta) {
      aggiungiItem(gameData.current.quizCorrente.ricompensa);
      showToast("Risposta corretta");
    } else {
      showToast("Risposta errata");
    }
    setShowQuizScreen(false);
  };

  return (
    <div className="contenitoreDomanda">
      <p className="titoloDomanda">{gameData.current.quizCorrente.nomeQuiz}</p>
      <p className="testoDomandata">{gameData.current.quizCorrente.domanda}</p>
      <input
        type="text"
        className="inputRisposta"
        placeholder="risposta..."
        onChange={(e) => setRisposta(e.target.value)}
      />
      <motion.div
        whileHover={{ scale: 1.025 }}
        className="btnCheck"
        onClick={check}
      >
        CHECK
      </motion.div>
    </div>
  );
};

export default QuizScreen;
