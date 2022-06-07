import "./AscensoreScreen.css";
import React, { useContext } from "react";

import { gameContext } from "../../Hooks/useContext";
import useStanze from "../../Hooks/useStanze";

const AscensoreScreen = () => {
  const { gameData, setShowAscensoreScreen, showAscensoreScreenRef } =
    useContext(gameContext);
  const { setPortaStanza } = useStanze();

  const changePiano = (numPiano) => {
    if (
      gameData.current.ascensore.piano.current !== numPiano &&
      gameData.current.ascensore.piano.requested === null
    ) {
      gameData.current.ascensore.piano.requested = numPiano;
      gameData.current.ascensore.piano.prev = numPiano;

      setPortaStanza("ascensore", 0, true);
      setPortaStanza("ascensore", 1, true);
      setPortaStanza("ascensore", 2, true);

      setShowAscensoreScreen(false);
      showAscensoreScreenRef.current = false;
    }
  };

  return (
    <div className="contenitoreAscensoreScreen">
      <p className="titoloAscensoreScreen">Ascensore</p>
      <div className="ascController">
        <div className="ascBtn ascBtn1" onClick={() => changePiano(1)}>
          1
        </div>
        <div className="ascBtnBack ascBtnBack1"></div>

        <div className="ascBtn ascBtn2" onClick={() => changePiano(2)}>
          2
        </div>
        <div className="ascBtnBack ascBtnBack2"></div>
      </div>
    </div>
  );
};

export default AscensoreScreen;
