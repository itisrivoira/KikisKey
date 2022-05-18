import { useContext, useState } from "react";
import { gameContext } from "./useContext";

const useInventario = (actionBtn) => {
  const [showInventario, setShowInventario] = useState(false);

  const inventarioController = (pressedKey) => {
    if (pressedKey === actionBtn) {
      setShowInventario((prev) => !prev);
    }
  };

  return { showInventario, inventarioController };
};

export default useInventario;
