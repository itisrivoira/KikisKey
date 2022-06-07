import { useContext } from "react";
import { gameContext } from "./useContext";

const useInfoScreen = () => {
  const { setInfoScreenText, setShowInfoScreen } = useContext(gameContext);

  const activateInfoScreen = (screenText, screenTime) => {
    setInfoScreenText(screenText);

    setShowInfoScreen(true);

    setTimeout(() => {
      setShowInfoScreen(false);
      setInfoScreenText("");
    }, screenTime);
  };

  return { activateInfoScreen };
};

export default useInfoScreen;
