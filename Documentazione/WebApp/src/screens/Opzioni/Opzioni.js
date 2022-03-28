import "./Opzioni.css";
import { Link } from "react-router-dom";

const Opzioni = () => {
  return (
    <div className="contenitoreOpz">
      <div className="contenutoOpz">
        <p className="titoloOpz">OPZIONI</p>
        <Link to="/Opzioni/Audio">
          <div className="actionBtnOpz audioBtn">AUDIO</div>
        </Link>
        <div className="spacerBtns"></div>
        <Link to="/">
          <div className="actionBtnOpz indietroBtn">INDIETRO</div>
        </Link>
      </div>
    </div>
  );
};

export default Opzioni;
