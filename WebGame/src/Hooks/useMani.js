import { useContext } from "react";
import { gameContext } from "./useContext";

const useMani = () => {
  const { setManoSelezionata } = useContext(gameContext);

  const maniController = (pressedKey) => {
    if (pressedKey === "1") {
      setManoSelezionata(1);
    }
    if (pressedKey === "2") {
      setManoSelezionata(2);
    }
  };

  return { maniController };
};

export default useMani;
