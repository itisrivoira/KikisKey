import React, { useContext } from "react";
import { gameContext } from "../../Hooks/useContext";

const Stanza = (props) => {
  const { stanzaLayer1Ref, stanzaLayer2Ref } = useContext(gameContext);

  return (
    <>
      <img
        className="stanzaLayer1Img"
        src={props.defaultImg1}
        alt={"stanzaLayer1"}
        style={{ display: "none" }}
        ref={stanzaLayer1Ref}
      />
      <img
        className="stanzaLayer2Img"
        src={props.defaultImg2}
        alt={"stanzaLayer2"}
        style={{ display: "none" }}
        ref={stanzaLayer2Ref}
      />
    </>
  );
};

export default Stanza;
