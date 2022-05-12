import { useRef } from "react";

const useBidello = () => {
  const bidelli = useRef([
    {
      name: "bidello1",
      step: 48,
      x: {
        min: 1248,
        max: 4128,
        current: 4032,
      },
      y: {
        min: 3648,
        max: 3168,
        current: 1296,
      },
    },
  ]);

  const muovi = () => {
    bidelli.current[0].x.current -= bidelli.current[0].step;
  };

  return { bidelli, muovi };
};

export default useBidello;
