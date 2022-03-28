import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="contenitoreMenu">
      <div className="contenutoMenu">
        <p className="titoloMenu">KIKI'S KEY</p>
        <Link to="/Gioca">
          <div className="actionBtnMenu giocaBtn">GIOCA</div>
        </Link>
        <div className="spacerBtns"></div>
        <Link to="/Opzioni">
          <div className="actionBtnMenu opzioniBtn">OPZIONI</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
