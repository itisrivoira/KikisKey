import { useContext, useRef } from "react";
import { gameContext } from "./useContext";
import usePlayerItemsManager from "./usePlayerItemsManager";
import useStanze from "./useStanze";
import useToast from "./useToast";

const useInteractData = () => {
  const { gameData, setShowMisteriosoScreen, setShowDistributoreScreen } =
    useContext(gameContext);
  const { aggiungiItem, rimuoviItem, checkItem } = usePlayerItemsManager();
  const { setPortaStanza } = useStanze();
  const { showToast } = useToast();

  const interactList = useRef([
    {
      desc: "item cloro",
      stanza: {
        name: "chimica1",
        x: 288,
        y: 144,
      },
      cmd: () => {
        if (gameData.current.trovatoCloro === false) {
          aggiungiItem("Cloro");
          showToast("Trovato cloro!");
          gameData.current.trovatoCloro = true;
        }
      },
    },
    {
      desc: "item idrogeno",
      stanza: {
        name: "chimica2",
        x: 672,
        y: 144,
      },
      cmd: () => {
        if (gameData.current.trovatoIdrogeno === false) {
          aggiungiItem("Idrogeno");
          showToast("Trovato idrogeno!");
          gameData.current.trovatoIdrogeno = true;
        }
      },
    },
    {
      desc: "item acido",
      stanza: {
        name: "chimica1",
        x: 1056,
        y: 144,
      },
      cmd: () => {
        if (
          gameData.current.creatoAcido === false &&
          gameData.current.trovatoCloro === true &&
          gameData.current.trovatoIdrogeno === true
        ) {
          rimuoviItem("Cloro");
          rimuoviItem("Idrogeno");
          aggiungiItem("Acido");
          showToast("Creato acido!");
          gameData.current.creatoAcido = true;
        }
      },
    },
    {
      desc: "scogliere porta chimica2",
      stanza: {
        name: "chimica2",
        x: 1296,
        y: 960,
      },
      cmd: () => {
        if (
          gameData.current.creatoAcido === true &&
          gameData.current.portaSciolta === false
        ) {
          rimuoviItem("Acido");
          showToast("Porta sciolta...");
          setPortaStanza("chimica2", 1, false);
          gameData.current.portaSciolta = true;
        } else {
          showToast("Porta chiusta");
        }
      },
    },
    {
      name: "peronaggio misterioso",
      stanza: {
        name: "corridoio",
        x: 4128,
        y: 192,
      },
      cmd: () => {
        setShowMisteriosoScreen((prev) => !prev);
      },
    },
    {
      name: "item moneta comune",
      stanza: {
        name: "aula1",
        x: 768,
        y: 624,
      },
      cmd: () => {
        if (gameData.current.monetaComuneRaccolta === false) {
          aggiungiItem("Moneta comune");
          gameData.current.monetaComuneRaccolta = true;
        }
      },
    },
    {
      name: "distributore",
      stanza: {
        name: "corridoio",
        x: 1344,
        y: 1008,
      },
      cmd: () => {
        setShowDistributoreScreen((prev) => !prev);
      },
    },
    {
      name: "distributore fuori uso",
      stanza: {
        name: "corridoio",
        x: 1440,
        y: 1008,
      },
      cmd: () => {
        showToast("Distributore fuori uso");
      },
    },
    {
      name: "martella finestra",
      stanza: {
        name: "corridoio",
        x: 2784,
        y: 1008,
      },
      cmd: () => {
        if (checkItem("Martello")) {
          gameData.current.finestraRotta = true;
          setPortaStanza("corridoio", 6, false);
          setPortaStanza("bidelleria", 1, false);
        }
      },
    },
    {
      name: "martella finestra",
      stanza: {
        name: "corridoio",
        x: 2784,
        y: 1008,
      },
      cmd: () => {
        if (checkItem("Martello")) {
          gameData.current.finestraRotta = true;
          setPortaStanza("corridoio", 6, false);
          setPortaStanza("bidelleria", 1, false);
          showToast("finestra spaccccatta!");
        }
      },
    },
    {
      name: "item badge",
      stanza: {
        name: "bidelleria",
        x: 672,
        y: 144,
      },
      cmd: () => {
        aggiungiItem("Badge");
        showToast("trovato il Badge!");
      },
    },
    {
      name: "stanza preside",
      stanza: {
        name: "corridoio",
        x: 2784,
        y: 2880,
      },
      cmd: () => {
        if (checkItem("ID")) {
          setPortaStanza("corridoio", 7, false);
          showToast("Porta ufficio preside aperta");
        } else {
          showToast("Porta ufficio preside chiusa");
        }
      },
    },
  ]);

  return { interactList };
};

export default useInteractData;
