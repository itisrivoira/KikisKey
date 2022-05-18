import { useContext } from "react";
import { gameContext } from "./useContext";

const usePlayerItemsManager = () => {
  const { playerItems, setPlayerItems } = useContext(gameContext);

  const aggiungiItem = (itemName) => {
    let tempArr = [...playerItems];
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].itemName === "") {
        tempArr[i].itemName = itemName;
        break;
      }
    }
    setPlayerItems(tempArr);
  };

  const rimuoviItem = (itemName) => {
    let tempArr = [...playerItems];
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].itemName === itemName) {
        tempArr[i].itemName = "";
        break;
      }
    }
    setPlayerItems(tempArr);
  };

  const checkItem = (itemName) => {
    let tempArr = [...playerItems];
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].itemName === itemName) {
        return true;
        break;
      }
    }
    return false;
  };

  return { aggiungiItem, rimuoviItem, checkItem };
};

export default usePlayerItemsManager;
