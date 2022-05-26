import "./MisteriosoScreen.css";
import React, { useContext, useRef, useState } from "react";
import { gameContext } from "../../Hooks/useContext";
import usePlayerItemsManager from "../../Hooks/usePlayerItemsManager";
import useToast from "../../Hooks/useToast";

const MisteriosoScreen = () => {
  const { misteriosoItems, setMisteriosoItems } = useContext(gameContext);
  const [popupItemData, setPopupItemData] = useState([false, -1]); //[showPopItem, itemId]
  const { showToast } = useToast();

  return (
    <div className="contenitoreMisteriosoScreen">
      <p className="titoloMisteriosoScreen">TI OFFRO...</p>
      <div className="misteriosoOfferte">
        {misteriosoItems.map((obj, index) => {
          return (
            <ItemBox
              key={index}
              index={index}
              itemScambio={obj.itemScambio}
              itemOfferto={obj.itemOfferto}
              setPopupItemData={setPopupItemData}
            />
          );
        })}
      </div>
      {popupItemData[0] ? (
        <PopupItem
          misteriosoItems={misteriosoItems}
          popupItemData={popupItemData}
          setPopupItemData={setPopupItemData}
          showToast={showToast}
        />
      ) : null}
    </div>
  );
};

export default MisteriosoScreen;

const ItemBox = (props) => {
  return (
    <div
      className={"itemBox offerta" + Number(props.index + 1)}
      onClick={() => props.setPopupItemData([true, props.index])}
    >
      <img src={"/img/items/" + props.itemOfferto + ".png"} />
    </div>
  );
};

const PopupItem = (props) => {
  const { aggiungiItem, rimuoviItem, checkItem } = usePlayerItemsManager();
  const { setShowMisteriosoScreen } = useContext(gameContext);
  const imgItemOffertoRef = useRef(null);

  const chiudiPopup = () => {
    props.setPopupItemData([false, -1]);
  };

  const scambia = () => {
    console.log(imgItemOffertoRef.current.src);
    if (
      imgItemOffertoRef.current.src ===
      "http://localhost:3000/img/items/Martello.png"
    ) {
      if (checkItem("Patate")) {
        rimuoviItem("Patate");
        aggiungiItem("Martello");
        props.showToast("Ottenuto martello!");
      }
    }
    if (
      imgItemOffertoRef.current.src === "http://localhost:3000/img/items/ID.png"
    ) {
      if (checkItem("Badge") && checkItem("Moneta Epica")) {
        rimuoviItem("Badge");
        rimuoviItem("Moneta Epica");
        aggiungiItem("ID");
        props.showToast("Ottenuto ID preside!");
      }
    }

    setShowMisteriosoScreen(false);
  };

  return (
    <div className="popupItemContainer">
      <div className="popupItemContenuto">
        <div className="itemBox popupScambio">
          <img
            src={
              "/img/items/" +
              props.misteriosoItems[props.popupItemData[1]].itemScambio +
              ".png"
            }
          />
        </div>
        <div className="popupMano">
          <img src="/img/misc/mano.png" />
        </div>
        <div className="itemBox popupOfferta">
          <img
            ref={imgItemOffertoRef}
            src={
              "/img/items/" +
              props.misteriosoItems[props.popupItemData[1]].itemOfferto +
              ".png"
            }
          />
        </div>
        <div className="popupBtns">
          <p onClick={scambia}>Scambia</p>
          <p onClick={chiudiPopup}>Indietro</p>
        </div>
      </div>
    </div>
  );
};
