import { useRef, useContext } from "react";
import { gameContext } from "./useContext";
import useStanze from "./useStanze";

const usePlayer = (playerRef, step) => {
  const { gameData } = useContext(gameContext);
  const [getStanzaCorrenteData] = useStanze();

  const stanzaCorrente = getStanzaCorrenteData(gameData["stanzaCorrente"]);

  const playerX = useRef(stanzaCorrente.spawnPlayerX);
  const playerY = useRef(stanzaCorrente.spawnPlayerY);
  const playerImgX = useRef(stanzaCorrente.spawnPlayerX);
  const playerImgY = useRef(stanzaCorrente.spawnPlayerY);

  const getPlayerXY = (coord) => {
    if (coord === "x") {
      return playerX.current;
    } else if (coord === "y") {
      return playerY.current;
    }
  };
  const setPlayerXY = (coord, val) => {
    if (coord === "x") {
      return (playerX.current = val);
    } else if (coord === "y") {
      return (playerY.current = val);
    }
  };

  const getPlayerImgXY = (coord) => {
    if (coord === "x") {
      return playerImgX.current;
    } else if (coord === "y") {
      return playerImgY.current;
    }
  };
  const setPlayerImgXY = (coord, val) => {
    if (coord === "x") {
      return (playerImgX.current = val);
    } else if (coord === "y") {
      return (playerImgY.current = val);
    }
  };

  const halfGameAreaWidth = 1150 / 2 - 32;
  const halfGameAreaHeight = 650 / 2 - 36;

  const playerCmds = [
    {
      name: "left",
      keys: ["arrowleft", "a"],
      func: () => {
        if (
          getPlayerXY("x") - step >= 0 &&
          getPlayerXY("x") - step <= stanzaCorrente.width
        ) {
          setPlayerXY("x", getPlayerXY("x") - step);

          if (
            getPlayerXY("x") <= halfGameAreaWidth ||
            getPlayerXY("x") > stanzaCorrente.width - halfGameAreaWidth
          ) {
            setPlayerImgXY("x", getPlayerImgXY("x") - step);
          }
        }
      },
    },
    {
      name: "right",
      keys: ["arrowright", "d"],
      func: () => {
        if (
          getPlayerXY("x") + step >= 0 &&
          getPlayerXY("x") + step <= stanzaCorrente.width
        ) {
          setPlayerXY("x", getPlayerXY("x") + step);

          if (
            getPlayerXY("x") <= halfGameAreaWidth ||
            getPlayerXY("x") > stanzaCorrente.width - halfGameAreaWidth
          ) {
            setPlayerImgXY("x", getPlayerImgXY("x") + step);
          }
        }
      },
    },
    {
      name: "up",
      keys: ["arrowup", "w"],
      func: () => {
        if (
          getPlayerXY("y") - step >= 0 &&
          getPlayerXY("y") - step <= stanzaCorrente.height
        ) {
          setPlayerXY("y", getPlayerXY("y") - step);

          if (
            getPlayerXY("y") <= halfGameAreaHeight ||
            getPlayerXY("y") > stanzaCorrente.height - halfGameAreaHeight
          ) {
            setPlayerImgXY("y", getPlayerImgXY("y") - step);
          }
        }
      },
    },
    {
      name: "down",
      keys: ["arrowdown", "s"],
      func: () => {
        if (
          getPlayerXY("y") + step >= 0 &&
          getPlayerXY("y") + step <= stanzaCorrente.height
        ) {
          setPlayerXY("y", getPlayerXY("y") + step);

          if (
            getPlayerXY("y") <= halfGameAreaHeight ||
            getPlayerXY("y") > stanzaCorrente.height - halfGameAreaHeight
          ) {
            setPlayerImgXY("y", getPlayerImgXY("y") + step);
          }
        }
      },
    },
  ];

  const playerImgIndex = useRef(2);

  const animate = (cmdName) => {
    playerRef.current.src =
      "/img/player/" + cmdName + "/" + playerImgIndex.current + ".png";

    if (playerImgIndex.current >= 3) {
      playerImgIndex.current = 1;
    } else {
      playerImgIndex.current++;
    }
  };

  const playerController = (pressedKey) => {
    for (let cmd of playerCmds) {
      if (cmd["keys"].includes(pressedKey)) {
        cmd["func"]();
        let cmdName = cmd["name"];
        animate(cmdName);
      }
    }
  };

  return [getPlayerXY, getPlayerImgXY, playerController];
};

export default usePlayer;
