import { useContext, useRef } from "react";
import { gameContext } from "./useContext";
import usePlayerItemsManager from "./usePlayerItemsManager";
import useStanze from "./useStanze";
import useToast from "./useToast";

const useInteractData = () => {
  const {
    gameData,
    setShowMisteriosoScreen,
    setShowDistributoreScreen,
    showDistributoreScreenRef,
    setShowComputerScreen,
    showComputerScreenRef,
    setShowCodiceScreen,
    showCodiceScreenRef,
    setShowServerScreen,
    showServerScreenRef,
    setShowAscensoreScreen,
    showAscensoreScreenRef,
    portaBidelleria,
    ascensore,
  } = useContext(gameContext);
  const { aggiungiItem, rimuoviItem, checkSelectedItem } =
    usePlayerItemsManager();
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
      desc: "sciogliere porta chimica2",
      stanza: {
        name: "chimica2",
        x: 1296,
        y: 960,
      },
      cmd: () => {
        if (
          gameData.current.creatoAcido === true &&
          gameData.current.portaSciolta === false &&
          checkSelectedItem("Acido")
        ) {
          rimuoviItem("Acido");
          showToast("Porta sciolta...");
          setPortaStanza("chimica2", 1, false);
          gameData.current.portaSciolta = true;

          gameData.current.startedCapitoli.due = true; //capitolo 2 iniziato
        } else {
          showToast("Porta chiusa");
        }
      },
    },
    {
      name: "personaggio misterioso",
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
          aggiungiItem("Moneta Comune");
          gameData.current.monetaComuneRaccolta = true;
          showToast("Trovato moneta comune");
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
        showDistributoreScreenRef.current = !showDistributoreScreenRef.current;
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
      name: "porta bidelleria esterna",
      stanza: {
        name: "corridoio",
        x: 3264,
        y: 624,
      },
      cmd: () => {
        if (!portaBidelleria) {
          showToast("Porta bidelleria chiusa");
        }
      },
    },
    {
      name: "porta bidelleria interna",
      stanza: {
        name: "bidelleria",
        x: 960,
        y: 672,
      },
      cmd: () => {
        if (!portaBidelleria) {
          showToast("Porta bidelleria chiusa");
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
        if (checkSelectedItem("Martello") && !gameData.current.finestraRotta) {
          gameData.current.finestraRotta = true;
          setPortaStanza("corridoio", 6, false);
          setPortaStanza("bidelleria", 1, false);
          showToast("Finestra spacccatta!!");

          gameData.current.startedCapitoli.tre = true; //capitolo 3 iniziato
        }
      },
    },
    {
      name: "pc bidelleria",
      stanza: {
        name: "bidelleria",
        x: 240,
        y: 384,
      },
      cmd: () => {
        setShowComputerScreen((prev) => !prev);
        showComputerScreenRef.current = !showComputerScreenRef.current;
      },
    },
    {
      name: "codice pc bidelleria",
      stanza: {
        name: "bidelleria",
        x: 384,
        y: 336,
      },
      cmd: () => {
        setShowCodiceScreen((prev) => !prev);
        showCodiceScreenRef.current = !showCodiceScreenRef.current;
      },
    },
    {
      name: "server bidelleria",
      stanza: {
        name: "bidelleria",
        x: 192,
        y: 144,
      },
      cmd: () => {
        setShowServerScreen((prev) => !prev);
        showServerScreenRef.current = !showServerScreenRef.current;
      },
    },
    {
      name: "item moneta rara bidelleria",
      stanza: {
        name: "bidelleria",
        x: 672,
        y: 144,
      },
      cmd: () => {
        if (!gameData.current.trovataMonetaRaraBidelleria) {
          aggiungiItem("Moneta Rara");
          gameData.current.trovataMonetaRaraBidelleria = true;
          showToast("Trovato moneta rara");
        }
      },
    },
    {
      name: "pc aula5",
      stanza: {
        name: "aula5",
        x: 768,
        y: 240,
      },
      cmd: () => {
        setShowComputerScreen((prev) => !prev);
        showComputerScreenRef.current = !showComputerScreenRef.current;
      },
    },
    {
      name: "aula5 prof",
      stanza: {
        name: "aula5",
        x: 528,
        y: 384,
      },
      cmd: () => {
        showToast("Odio le PASSWORD!!!");
      },
    },
    {
      name: "porta ascensore esterna 1",
      stanza: {
        name: "corridoio",
        x: 3936,
        y: 3264,
      },
      cmd: () => {
        if (!ascensore) {
          showToast("Porta ascensore chiusa");
        }
      },
    },
    {
      name: "porta ascensore esterna 2",
      stanza: {
        name: "corridoio",
        x: 3888,
        y: 3264,
      },
      cmd: () => {
        if (!ascensore) {
          showToast("Porta ascensore chiusa");
        }
      },
    },
    {
      name: "porta ascensore esterna 3",
      stanza: {
        name: "corridoio",
        x: 3984,
        y: 3264,
      },
      cmd: () => {
        if (!ascensore) {
          showToast("Porta ascensore chiusa");
        }
      },
    },
    {
      name: "ascensore controller",
      stanza: {
        name: "ascensore",
        x: 720,
        y: 144,
      },
      cmd: () => {
        if (
          gameData.current.ascensore.interactAscController &&
          gameData.current.ascensore.piano.requested === null
        ) {
          setShowAscensoreScreen((prev) => !prev);
          showAscensoreScreenRef.current = !showAscensoreScreenRef.current;
        }
      },
    },
    {
      name: "use ID preside",
      stanza: {
        name: "corridoio2",
        x: 576,
        y: 96,
      },
      cmd: () => {
        if (checkSelectedItem("ID")) {
          setPortaStanza("corridoio2", 0, false);
          showToast("Porta ufficio preside aperta");
        } else {
          showToast("Porta ufficio preside chiusa");
        }
      },
    },
    {
      name: "pc preside",
      stanza: {
        name: "ufficioPreside",
        x: 528,
        y: 288,
      },
      cmd: () => {
        setShowComputerScreen((prev) => !prev);
        showComputerScreenRef.current = !showComputerScreenRef.current;
      },
    },
  ]);

  return { interactList };
};

export default useInteractData;
