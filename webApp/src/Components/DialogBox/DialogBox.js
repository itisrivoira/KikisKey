import "./DialogBox.css";

const DialogBox = (props) => {
  return (
    <div className="contenitoreDialogBox">
      <p>{props.msg}</p>
    </div>
  );
};

export default DialogBox;
