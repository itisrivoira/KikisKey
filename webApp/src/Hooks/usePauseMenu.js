import { useState } from "react";

const usePauseMenu = (screenBtn) => {
  const [showPauseMenu, setShowPauseMenu] = useState(false);

  const pauseMenuController = (pressedKey) => {
    if (pressedKey === screenBtn) {
      setShowPauseMenu((prev) => !prev);
    }
  };

  return [showPauseMenu, pauseMenuController];
};

export default usePauseMenu;
