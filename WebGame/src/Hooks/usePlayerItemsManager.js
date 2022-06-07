import { useContext } from "react";
import { gameContext } from "./useContext";

const usePlayerItemsManager = () => {
  const { playerItems, setPlayerItems, manoSelezionataRef } =
    useContext(gameContext);

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
      }
    }
    return false;
  };

  const checkSelectedItem = (itemName) => {
    let tempArr = [...playerItems];
    if (tempArr[manoSelezionataRef.current].itemName === itemName) {
      return true;
    }
    return false;
  };

  return { aggiungiItem, rimuoviItem, checkItem, checkSelectedItem };
};

export default usePlayerItemsManager;
