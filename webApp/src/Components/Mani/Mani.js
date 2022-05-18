import React, { useContext } from "react";
import "./Mani.css";

import { gameContext } from "../../Hooks/useContext";
import { useDrag, useDrop } from "react-dnd";

const Mani = () => {
  const { playerItems, setPlayerItems, manoSelezionata } =
    useContext(gameContext);

  const handleDrop = (indexBox, item) => {
    const { id, name } = item;
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
    <div className="contenitoreMani">
      {playerItems.map((obj) => {
        if (obj.id <= 1) {
          let boxStyle;
          if (obj.id + 1 === manoSelezionata) {
            boxStyle = "manoSelezionata";
          } else {
            boxStyle = "mano";
          }
          return (
            <Mano
              key={obj.id + obj.itemName}
              id={obj.id}
              itemName={obj.itemName}
              boxStyle={boxStyle}
              manoSelezionata={manoSelezionata}
              dropFunz={(item) => handleDrop(obj.id, item, "mani")}
            />
          );
        }
      })}
    </div>
  );
};

const Mano = (props) => {
  const [, drop] = useDrop({
    accept: "imgItem",
    drop: props.dropFunz,
  });

  let indexMano = props.id + 1;
  return (
    <div className={props.boxStyle} ref={drop}>
      <Item id={props.id} name={props.itemName} />
      <p className="nomeItem">{indexMano}</p>
    </div>
  );
};

const Item = (props) => {
  const [, drag] = useDrag(() => ({
    type: "imgItem",
    item: { id: props.id, name: props.name },
  }));

  if (props.name !== "") {
    return <img src={"img/items/" + props.name + ".png"} ref={drag} />;
  }
};

export default Mani;
