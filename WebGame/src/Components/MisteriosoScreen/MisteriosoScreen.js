import "./MisteriosoScreen.css";
import React, { useContext, useRef, useState } from "react";
import { gameContext } from "../../Hooks/useContext";
import usePlayerItemsManager from "../../Hooks/usePlayerItemsManager";
import useToast from "../../Hooks/useToast";

const MisteriosoScreen = () => {
  const { misteriosoItems } = useContext(gameContext);
  const [popupItemData, setPopupItemData] = useState([false, -1]); //[showPopItem, itemId]
  const { showToast } = useToast();

  const [itemClicked, setItemClicked] = useState(null);

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
              setItemClicked={setItemClicked}
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
          itemClicked={itemClicked}
        />
      ) : null}
    </div>
  );
};

export default MisteriosoScreen;

const ItemBox = (props) => {
  const onItemBoxClick = () => {
    props.setPopupItemData([true, props.index]);
    props.setItemClicked(props.itemOfferto);
  };

  return (
    <div
      className={"itemBox offerta" + Number(props.index + 1)}
      onClick={onItemBoxClick}
    >
      <img src={"/KikisKeyWebGame/img/items/" + props.itemOfferto + ".png"} />
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
    if (props.itemClicked === "Martello") {
      console.log("martello");
      if (checkItem("Patatine")) {
        rimuoviItem("Patatine");
        aggiungiItem("Martello");
        props.showToast("Ottenuto martello!");
      } else {
        props.showToast("Non offro gratuitamente...");
      }
    }
    if (props.itemClicked === "ID") {
      if (checkItem("Bibita")) {
        rimuoviItem("Bibita");
        aggiungiItem("ID");
        props.showToast("Ottenuto ID preside!");
      } else {
        props.showToast("Non offro gratuitamente...");
      }
    }
    if (props.itemClicked === "Forbici") {
      props.showToast("Non offro gratuitamente...");
    }

    setShowMisteriosoScreen(false);
  };

  return (
    <div className="popupItemContainer">
      <div className="popupItemContenuto">
        <div className="itemBox popupScambio">
          <img
            src={
              "/KikisKeyWebGame/img/items/" +
              props.misteriosoItems[props.popupItemData[1]].itemScambio +
              ".png"
            }
          />
        </div>
        <div className="popupMano">
          <img src="/KikisKeyWebGame/img/misc/mano.png" />
        </div>
        <div className="itemBox popupOfferta">
          <img
            ref={imgItemOffertoRef}
            src={
              "/KikisKeyWebGame/img/items/" +
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
