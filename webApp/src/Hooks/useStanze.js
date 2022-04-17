import { useRef, useContext, useEffect } from "react";
import { gameContext } from "./useContext";

const useStanze = () => {
  const stanze = [
    {
      name: "labChimica1",
      width: 2000,
      height: 1500,
      spawnPlayerX: 400,
      spawnPlayerY: 200,
    },
    {
      name: "labChimica2",
      width: 3500,
      height: 2000,
      spawnPlayerX: 0,
      spawnPlayerY: 0,
    },
  ];

  const getStanzaCorrenteData = (nomeStanzaCorrente) => {
    for (let stanza of stanze) {
      if (stanza["name"] === nomeStanzaCorrente) {
        return stanza;
      }
    }
  };

  return [getStanzaCorrenteData];
};

export default useStanze;
