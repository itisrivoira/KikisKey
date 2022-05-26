import "./Inventario.css";

import React, { useContext } from "react";
import { gameContext } from "../../Hooks/useContext";
import { useDrag, useDrop } from "react-dnd";

const Inventario = () => {
  const { playerItems, setPlayerItems } = useContext(gameContext);

  const handleDrop = (indexBox, item) => {
    const { id, name } = item;
    //console.log(id);
    //console.log(name);

    let tempArr = [...playerItems];

    if (tempArr[indexBox].itemName === "") {
      tempArr[id].itemName = "";
      tempArr[indexBox].itemName = name;
    } else {
      let dragItemName = tempArr[id].itemName;
      tempArr[id].itemName = tempArr[indexBox].itemName;
      tempArr[indexBox].itemName = dragItemName;
    }

    setPlayerItems(tempArr);
  };

  return (
    <div className="contenitorePlayerInventario">
      <p className="titoloPlayerInventario">Inventario</p>
      <div className="inventario">
        {playerItems.map((obj) => {
          if (obj.id >= 2) {
            return (
              <Box
                key={obj.id + obj.itemName}
                id={obj.id}
                itemName={obj.itemName}
                dropFunz={(item) => handleDrop(obj.id, item)}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

const Box = (props) => {
  const [, drop] = useDrop({
    accept: "imgItem",
    drop: props.dropFunz,
  });

  return (
    <div className={"box " + "box" + props.id} ref={drop}>
      <Item id={props.id} name={props.itemName} />
    </div>
  );
};

const Item = (props) => {
  const [, drag] = useDrag(() => ({
    type: "imgItem",
    item: { id: props.id, name: props.name },
  }));

  if (props.name !== "") {
    return (
      <>
        <img src={"img/items/" + props.name + ".png"} ref={drag} />
        <p className="nomeItem">{props.name}</p>
      </>
    );
  }
};

export default Inventario;
