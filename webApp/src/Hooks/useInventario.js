import { useContext, useState } from "react";
import { gameContext } from "./useContext";

const useInventario = (actionBtn) => {
  const [showInventario, setShowInventario] = useState(false);
  const { inventario, setInventario } = useContext(gameContext);

  const inventarioController = (pressedKey) => {
    if (pressedKey === actionBtn) {
      setShowInventario((prev) => !prev);
    }
  };

  let indexInventarioBox = 0;

  const aggiungiOggetto = (nomeOggetto) => {
    let tempInventario = [...inventario];
    tempInventario[indexInventarioBox] = [true, nomeOggetto];
    setInventario((old) => [...old, tempInventario]);
    indexInventarioBox += 1;
  };

  return {
    showInventario,
    inventarioController,
    aggiungiOggetto,
  };
};

export default useInventario;
