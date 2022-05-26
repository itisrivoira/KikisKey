import "./DistributoreScreen.css";
import React from "react";
import usePlayerItemsManager from "../../Hooks/usePlayerItemsManager";

const DistributoreScreen = () => {
  const { checkItem, rimuoviItem, aggiungiItem } = usePlayerItemsManager();
  const compra = () => {
    if (checkItem("Moneta Rara") && checkItem("Moneta Comune")) {
      aggiungiItem("Patate");
      rimuoviItem("Moneta Comune");
      rimuoviItem("Moneta Rara");
    }
  };

  return (
    <div className="contenitoreDistributore">
      <p className="titoloDistributore">Distributore</p>
      <div className="contenitoreProdottiDistri">
        <div className="imgProdotto1">
          <img src="/img/misc/Patate.png" width="100px"></img>
        </div>
        <div className="costoProdotto1">
          <img src="/img/items/Moneta Comune.png" />
          <img src="/img/items/Moneta Rara.png" />
        </div>
        <div className="compraProddot1" onClick={compra}>
          Compra
        </div>
        <div className="div4"> </div>
        <div className="div5"> </div>
        <div className="div6"> </div>
      </div>
    </div>
  );
};

export default DistributoreScreen;
