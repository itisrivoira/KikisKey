import { useContext } from "react";
import { gameContext } from "./useContext";

const useStanze = () => {
  const { stanze, gameData } = useContext(gameContext);
  const { stanzaLayer1Ref, stanzaLayer2Ref } = useContext(gameContext);

  const setPortaStanza = (nomeStanza, indexPorta, chiusaBool) => {
    for (let i = 0; i < stanze.current.length; i++) {
      if (stanze.current[i].name === nomeStanza) {
        stanze.current[i].porte[indexPorta].chiusa = chiusaBool;
      }
    }
  };

  const getStanzaCorrente = () => {
    for (let stanza of stanze.current) {
      if (stanza["name"] === gameData.current["stanzaCorrente"]) {
        return stanza;
      }
    }
  };

  const updatePlayerPos = (setPlayer, arrNewPos) => {
    setPlayer("x", arrNewPos[0]);
    setPlayer("y", arrNewPos[1]);
  };

  const checkCambioStanza = (playerX, playerY, cmdName) => {
    let arrPorteStanza = getStanzaCorrente().porte;
    for (let i = 0; i < arrPorteStanza.length; i++) {
      if (
        playerX === arrPorteStanza[i].x &&
        playerY === arrPorteStanza[i].y &&
        cmdName === arrPorteStanza[i].key &&
        arrPorteStanza[i].chiusa === false
      ) {
        gameData.current["stanzaCorrente"] = arrPorteStanza[i].stanza;
        stanzaLayer1Ref.current.src =
          "/img/stanze/" + arrPorteStanza[i].stanza + "/layer1.png";
        stanzaLayer2Ref.current.src =
          "/img/stanze/" + arrPorteStanza[i].stanza + "/layer2.png";

        let spawnPlayerX = arrPorteStanza[i].spawnPlayer[0];
        let spawnPlayerY = arrPorteStanza[i].spawnPlayer[1];
        return [spawnPlayerX, spawnPlayerY];
      }
    }
    return false;
  };

  return {
    getStanzaCorrente,
    setPortaStanza,
    checkCambioStanza,
    updatePlayerPos,
  };
};

export default useStanze;
