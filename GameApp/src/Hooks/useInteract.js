import useInteractData from "./useInteractData";
import useStanze from "./useStanze";

const useInteract = (actionBtn) => {
  const { interactList } = useInteractData();
  const { getStanzaCorrente } = useStanze();

  const interactController = (pressedKey, playerX, playerY) => {
    for (let i = 0; i < interactList.current.length; i++) {
      if (
        pressedKey === actionBtn &&
        getStanzaCorrente().name === interactList.current[i].stanza.name &&
        playerX === interactList.current[i].stanza.x &&
        playerY === interactList.current[i].stanza.y
      ) {
        interactList.current[i].cmd();
      }
    }
  };

  return { interactController };
};

export default useInteract;
