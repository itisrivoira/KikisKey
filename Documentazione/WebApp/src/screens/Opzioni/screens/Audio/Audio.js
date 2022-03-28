import "./Audio.css";
import { Link } from "react-router-dom";

const Audio = () => {
  return (
    <div className="contenitoreAudio">
      <div className="contenutoAudio">
        <p className="titoloAudio">AUDIO</p>
        <div className="spacerBtns"></div>
        <Link to="/Opzioni">
          <div className="actionBtnAudio indietroBtn">INDIETRO</div>
        </Link>
      </div>
    </div>
  );
};

export default Audio;
