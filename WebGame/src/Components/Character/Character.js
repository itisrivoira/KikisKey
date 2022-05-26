const Character = (props) => {
  return (
    <img
      className="characterImg"
      src={props.defaultImg}
      alt={"character"}
      style={{ display: "none" }}
      ref={props.characterRef}
    />
  );
};

export default Character;
