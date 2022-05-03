import { useContext, useState } from "react";

import { gameContext } from "./useContext";

const useInventario = (actionBtn, dimInventario) => {
  const [showInventario, setShowInventario] = useState(false);
  const { inventario, setInventario } = useContext(gameContext);

  const inventarioController = (pressedKey) => {
    if (pressedKey === actionBtn) {
      setShowInventario((prev) => !prev);
    }
  };

  let indexInventarioBox = 0;

  const aggiungiOggetto = (nomeOggetto) => {
    if (indexInventarioBox < dimInventario) {
      let tempInventario = inventario;
      let oggettoAggiunto = false;

      for (let i = 0; i < tempInventario.length; i++) {
        if (tempInventario[i].includes(nomeOggetto)) {
          tempInventario[i][2] += 1;
          oggettoAggiunto = true;
        }
      }

      if (oggettoAggiunto === false) {
        tempInventario[indexInventarioBox] = [true, nomeOggetto, 1];
        indexInventarioBox += 1;
      }

      setInventario(tempInventario);
    }
  };

  const riordinaOggetti = () => {
    let tempInventario = inventario;
    for (let i = 0; i < tempInventario.length; i++) {
      if (i < tempInventario.length - 1) {
        if (
          tempInventario[i][0] === false &&
          tempInventario[i + 1][0] === true
        ) {
          tempInventario[i] = tempInventario[i + 1];
          tempInventario[i + 1] = [false, "", 0];
        }
      }
    }
    setInventario(tempInventario);
  };

  const rimuoviOggetto = (nomeOggetto) => {
    if (indexInventarioBox > 0) {
      let tempInventario = inventario;

      for (let i = 0; i < tempInventario.length; i++) {
        if (tempInventario[i].includes(nomeOggetto)) {
          if (tempInventario[i][2] > 1) {
            tempInventario[i][2] -= 1;
          } else {
            tempInventario[i] = [false, "", 0];
            indexInventarioBox -= 1;

            riordinaOggetti();
          }
        }
      }

      setInventario(tempInventario);
    }
  };

  return {
    showInventario,
    inventarioController,
    aggiungiOggetto,
    rimuoviOggetto,
  };
};

export default useInventario;
