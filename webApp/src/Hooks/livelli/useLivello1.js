import { useContext } from "react";
import { gameContext } from "../useContext";
import useInventario from "./../useInventario";
import useStanze from "./../useStanze";
import useToast from "../useToast";

const useLivello1 = () => {
  const { getStanzaCorrente } = useStanze();
  const { aggiungiOggetto, rimuoviOggetto } = useInventario("e", 6);
  const { showToast } = useToast();

  let aggiuntoCloro = false;
  let aggiuntoIdrogeno = false;
  let creatoAcido = false;

  const startLivello1 = (pressedKey, playerX, playerY) => {
    if (
      pressedKey === " " &&
      playerX === 288 &&
      playerY === 144 &&
      getStanzaCorrente().name === "chimica1" &&
      aggiuntoCloro === false
    ) {
      aggiungiOggetto("Cloro");
      aggiuntoCloro = true;
      showToast("Trovato Cloro!");
    }

    if (
      pressedKey === " " &&
      playerX === 672 &&
      playerY === 144 &&
      getStanzaCorrente().name === "chimica2" &&
      aggiuntoIdrogeno === false
    ) {
      aggiungiOggetto("Idrogeno");
      aggiuntoIdrogeno = true;
      showToast("Trovato Idrogeno!");
    }

    if (
      pressedKey === " " &&
      playerX === 1056 &&
      playerY === 144 &&
      getStanzaCorrente().name === "chimica1" &&
      aggiuntoCloro === true &&
      aggiuntoIdrogeno === true
    ) {
      aggiungiOggetto("Acido");
      rimuoviOggetto("Cloro");
      rimuoviOggetto("Idrogeno");
      creatoAcido = true;
      showToast("Creato Acido!");
    }

    if (
      pressedKey === " " &&
      playerX === 1296 &&
      playerY === 960 &&
      creatoAcido === true &&
      getStanzaCorrente().name === "chimica2"
    ) {
      rimuoviOggetto("Acido");
      showToast("Porta Aperta");
    }
  };

  return { startLivello1 };
};

export default useLivello1;
