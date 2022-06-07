import { useContext, useRef } from "react";
import { gameContext } from "./useContext";
import useStanze from "./useStanze";
import useQuizData from "./useQuizData";
import useToast from "./useToast";

const useQuizScreen = (actionBtn) => {
  const { gameData, setShowQuizScreen } = useContext(gameContext);
  const { getStanzaCorrente } = useStanze();
  const { showToast } = useToast();

  const { listaQuiz, checkPointQuiz } = useQuizData();
  const arrIndexQuizScelti = useRef([]);
  const arrQuizScelti = useRef([]);

  const totalCheckPointQuiz = checkPointQuiz.current.length;
  const totalQuiz = listaQuiz.current.length;

  for (let i = 0; i < totalCheckPointQuiz; i++) {
    let numRand = Math.floor(Math.random() * totalQuiz);
    arrIndexQuizScelti.current.push(numRand);
  }

  for (let i = 0; i < totalCheckPointQuiz; i++) {
    arrQuizScelti.current[i] = listaQuiz.current[arrIndexQuizScelti.current[i]];
  }

  const QuizScreenController = (pressedKey, playerX, playerY) => {
    for (let i = 0; i < totalCheckPointQuiz; i++) {
      if (
        pressedKey == actionBtn &&
        getStanzaCorrente().name === checkPointQuiz.current[i].stanza.name &&
        playerX === checkPointQuiz.current[i].stanza.x &&
        playerY === checkPointQuiz.current[i].stanza.y
      ) {
        if (gameData.current.rispostoDomande[i] === false) {
          setShowQuizScreen((prev) => !prev);

          gameData.current.quizCorrente.id = checkPointQuiz.current[i].id;

          gameData.current.quizCorrente.nomeQuiz =
            checkPointQuiz.current[i].name;

          gameData.current.quizCorrente.domanda =
            arrQuizScelti.current[i].domanda;

          gameData.current.quizCorrente.risposta =
            arrQuizScelti.current[i].risposta;

          gameData.current.quizCorrente.ricompensa =
            checkPointQuiz.current[i].ricompensa;
        } else {
          showToast("Non ho altre domande");
        }
      }
    }
  };

  return {
    QuizScreenController,
  };
};

export default useQuizScreen;
