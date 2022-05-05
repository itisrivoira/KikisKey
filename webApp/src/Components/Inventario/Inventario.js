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
          {inventario[0][0] ? <Oggetto nome={inventario[0][1]} quantita={inventario[0][2]}/> 
                            : "1"}
        </div>
        <div className="box box2">
          {inventario[1][0] ? <Oggetto nome={inventario[1][1]} quantita={inventario[1][2]}/> 
                            : "2"}
        </div>
        <div className="box box3">
          {inventario[2][0] ? <Oggetto nome={inventario[2][1]} quantita={inventario[2][2]}/> 
                            : "3"}
        </div>
        <div className="box box4">
          {inventario[3][0] ? <Oggetto nome={inventario[3][1]} quantita={inventario[3][2]}/> 
                            : "4"}
        </div>
        <div className="box box5">
          {inventario[4][0] ? <Oggetto nome={inventario[4][1]} quantita={inventario[4][2]}/> 
                            : "5"}
        </div>
        <div className="box box6">
          {inventario[5][0] ? <Oggetto nome={inventario[5][1]} quantita={inventario[5][2]}/> 
                            : "6"}
        </div>
      </div>
    </div>
  );
};

const Oggetto = (props) => {
  return (
    <>
      <img src={"img/oggetti/" + props.nome + ".png"} />
      {props.quantita > 1 && <span className="quantitaOggetto">{"x" + props.quantita}</span>}
      <p className="nomeOggetto">{props.nome}</p>
    </>
  );
};

export default Inventario;
