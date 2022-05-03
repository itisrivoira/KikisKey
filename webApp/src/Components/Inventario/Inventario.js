import "./Inventario.css";

import React, { useContext } from "react";
import { gameContext } from "../../Hooks/useContext";

const Inventario = () => {
  const { inventario } = useContext(gameContext);
  return (
    <div className="contenitorePlayerInventario">
      <p className="titoloPlayerInventario">Inventario</p>
      <div className="inventario">
        <div className="box box1">
          {inventario[0][0] ? <Oggetto nomeOggetto={inventario[0][1]} /> : "1"}
        </div>
        <div className="box box2">
          {inventario[1][0] ? <Oggetto nomeOggetto={inventario[1][1]} /> : "2"}
        </div>
        <div className="box box3">
          {inventario[2][0] ? <Oggetto nomeOggetto={inventario[2][1]} /> : "3"}
        </div>
        <div className="box box4">
          {inventario[3][0] ? <Oggetto nomeOggetto={inventario[3][1]} /> : "4"}
        </div>
        <div className="box box5">
          {inventario[4][0] ? <Oggetto nomeOggetto={inventario[4][1]} /> : "5"}
        </div>
        <div className="box box6">
          {inventario[5][0] ? <Oggetto nomeOggetto={inventario[5][1]} /> : "6"}
        </div>
      </div>
    </div>
  );
};

const Oggetto = (props) => {
  return (
    <>
      <img src={"img/oggetti/" + props.nomeOggetto + ".png"} />
      <p className="nomeOggetto">{props.nomeOggetto}</p>
    </>
  );
};

export default Inventario;
