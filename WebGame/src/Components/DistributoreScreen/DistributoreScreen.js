import "./DistributoreScreen.css";
import React from "react";
import usePlayerItemsManager from "../../Hooks/usePlayerItemsManager";
import useToast from "./../../Hooks/useToast";

const DistributoreScreen = () => {
  const { checkItem, rimuoviItem, aggiungiItem } = usePlayerItemsManager();
  const { showToast } = useToast();

  const compraProdotto1 = () => {
    if (checkItem("Moneta Rara") && checkItem("Moneta Comune")) {
      aggiungiItem("Patatine");
      rimuoviItem("Moneta Comune");
      rimuoviItem("Moneta Rara");

      showToast("Comprato patatine!");
    } else {
      showToast("Credito insufficiente");
    }
  };

  const compraProdotto2 = () => {
    if (checkItem("Moneta Rara") && checkItem("Moneta Epica")) {
      aggiungiItem("Bibita");
      rimuoviItem("Moneta Rara");
      rimuoviItem("Moneta Epica");

      showToast("Comprato Bibita!");
    } else {
      showToast("Credito insufficiente");
    }
  };

  return (
    <div className="contenitoreDistributore">
      <p className="titoloDistributore">Distributore</p>
      <div className="contenitoreProdottiDistri">
        <div className="imgProdotto1">
          <img src="/KikisKeyWebGame/img/items/Patatine.png"></img>
        </div>
        <div className="costoProdotto1">
          <img src="/KikisKeyWebGame/img/items/Moneta Comune.png" />
          <img src="/KikisKeyWebGame/img/items/Moneta Rara.png" />
        </div>
        <div className="compraProdotto1" onClick={compraProdotto1}>
          <p>Compra</p>
        </div>
        <div className="imgProdotto2">
          <img src="/KikisKeyWebGame/img/items/Bibita.png" />
        </div>
        <div className="costoProdotto2">
          <img src="/KikisKeyWebGame/img/items/Moneta Rara.png" />
          <img src="/KikisKeyWebGame/img/items/Moneta Epica.png" />
        </div>
        <div className="compraProdotto2" onClick={compraProdotto2}>
          <p>Compra</p>
        </div>
      </div>
    </div>
  );
};

export default DistributoreScreen;
