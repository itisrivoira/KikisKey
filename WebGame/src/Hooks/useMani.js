import { useContext } from "react";
import { gameContext } from "./useContext";

const useMani = () => {
  const { manoSelezionataRef, setManoSelezionata } = useContext(gameContext);

  const maniController = (pressedKey) => {
    if (pressedKey === "1") {
      setManoSelezionata(1);
      manoSelezionataRef.current = 0;
    }
    if (pressedKey === "2") {
      setManoSelezionata(2);
      manoSelezionataRef.current = 1;
    }
  };

  return { maniController };
};

export default useMani;
