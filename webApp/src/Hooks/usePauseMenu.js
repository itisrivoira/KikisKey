import { useState } from "react";

const usePauseMenu = (actionBtn) => {
  const [showPauseMenu, setShowPauseMenu] = useState(0);

  const pauseMenuController = (pressedKey) => {
    if (pressedKey === actionBtn) {
      setShowPauseMenu((prev) => !prev);
    }
  };

  return { showPauseMenu, pauseMenuController };
};

export default usePauseMenu;
