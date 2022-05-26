import { useRef } from "react";

const useQuizData = () => {
  const listaQuiz = useRef([
    {
      domanda: "testo domanda 1",
      risposta: "1",
    },
    {
      domanda: "testo domanda 2",
      risposta: "2",
    },
    {
      domanda: "testo domanda 3",
      risposta: "3",
    },
    {
      domanda: "testo domanda 4",
      risposta: "4",
    },
  ]);

  const checkPointQuiz = useRef([
    {
      name: "Domanda!",
      stanza: {
        name: "aula2",
        x: 624,
        y: 288,
      },
      ricompensa: "Moneta Epica",
    },
    {
      name: "Domanda!",
      stanza: {
        name: "aula4",
        x: 480,
        y: 432,
      },
      ricompensa: "Moneta Rara",
    },
  ]);

  return { listaQuiz, checkPointQuiz };
};

export default useQuizData;
