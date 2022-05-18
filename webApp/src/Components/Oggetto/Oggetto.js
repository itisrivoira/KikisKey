const Oggetto = (props) => {
  return (
    <img
      className="oggettoImg"
      src={props.img}
      alt={"oggetto"}
      style={{ display: "none" }}
      ref={props.oggettoRef}
    />
  );
};

export default Oggetto;
