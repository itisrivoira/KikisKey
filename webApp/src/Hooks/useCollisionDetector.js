import useStanze from "./useStanze";

const useCollisionDetector = () => {
  const { getStanzaCorrente } = useStanze();

  const collisionDetectorX = (playerX, playerY, playerStep) => {
    let x = Math.floor((playerX + playerStep) / getStanzaCorrente().tileSize);
    let y = Math.floor(playerY / getStanzaCorrente().tileSize);

    if (getStanzaCorrente().collision[y][x] === 1) {
      return false;
    } else {
      return true;
    }
  };

  const collisionDetectorY = (playerX, playerY, playerStep) => {
    let x = Math.floor(playerX / getStanzaCorrente().tileSize);
    let y = Math.floor((playerY + playerStep) / getStanzaCorrente().tileSize);

    if (getStanzaCorrente().collision[y][x] === 1) {
      return false;
    } else {
      return true;
    }
  };

  return { collisionDetectorX, collisionDetectorY };
};

export default useCollisionDetector;
