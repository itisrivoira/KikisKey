import "./ComputerScreen.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import { gameContext } from "../../Hooks/useContext";

import useStanze from "../../Hooks/useStanze";

const ComputerScreen = () => {
  const {
    isPcOn,
    setIsPcOn,
    isServerOn,
    luci,
    setLuci,
    portaBidelleria,
    setPortaBidelleria,
    ascensore,
    setAscensore,
    setShowGameCompletedScreen,
    showGameCompletedScreenRef,
    setIsGameTimeRunning,
    gameData,
  } = useContext(gameContext);
  const { setPortaStanza } = useStanze();

  const [currentScreen, setCurrentScreen] = useState("LockScreen1");

  const [username, setUsername] = useState("unknown");
  const [password, setPassword] = useState("unknown");

  const [voto1, setVoto1] = useState(2);
  const [voto2, setVoto2] = useState(4);
  const [voto3, setVoto3] = useState(1);

  useEffect(() => {
    if (gameData.current.stanzaCorrente === "bidelleria") {
      setUsername("Guido");
      setPassword("iwkfq");
    } else if (gameData.current.stanzaCorrente === "aula5") {
      setUsername("Prof. info");
      setPassword("");
    } else if (gameData.current.stanzaCorrente === "ufficioPreside") {
      setUsername("Preside");
      setPassword("kiki");
    }
  }, []);

  return (
    <div className="contenitoreComputer">
      <div className="contenitoreComputerScreen">
        {gameData.current.stanzaCorrente === "bidelleria" && (
          <Icon name={"chrome"} setCurrentScreen={setCurrentScreen} />
        )}
        {gameData.current.stanzaCorrente === "aula5" && (
          <Icon name={"projector"} setCurrentScreen={setCurrentScreen} />
        )}
        {gameData.current.stanzaCorrente === "ufficioPreside" && (
          <Icon name={"classeViva"} setCurrentScreen={setCurrentScreen} />
        )}

        <Icon name={"libreOffice"} setCurrentScreen={setCurrentScreen} />
        <Icon name={"help"} setCurrentScreen={setCurrentScreen} />

        <Icon name={isServerOn ? "wifi" : "noWifi"} />

        <PowerBtn setIsPcOn={setIsPcOn} setCurrentScreen={setCurrentScreen} />
        <PowerLight isPcOn={isPcOn} />
        {currentScreen === "classeViva" && (
          <ClasseViva
            gameData={gameData}
            setCurrentScreen={setCurrentScreen}
            isServerOn={isServerOn}
            voto1={voto1}
            setVoto1={setVoto1}
            voto2={voto2}
            setVoto2={setVoto2}
            voto3={voto3}
            setVoto3={setVoto3}
            setShowGameCompletedScreen={setShowGameCompletedScreen}
            showGameCompletedScreenRef={showGameCompletedScreenRef}
            setIsGameTimeRunning={setIsGameTimeRunning}
          />
        )}
        {currentScreen === "chromeApp" && (
          <ChromeApp
            setCurrentScreen={setCurrentScreen}
            isServerOn={isServerOn}
            gameData={gameData}
            luci={luci}
            setLuci={setLuci}
            portaBidelleria={portaBidelleria}
            setPortaBidelleria={setPortaBidelleria}
            ascensore={ascensore}
            setAscensore={setAscensore}
            setPortaStanza={setPortaStanza}
          />
        )}
        {currentScreen === "projectorApp" && (
          <ProjectorApp
            setCurrentScreen={setCurrentScreen}
            gameData={gameData}
          />
        )}
        {currentScreen === "LockScreen1" && (
          <LockScreen1
            username={username}
            setCurrentScreen={setCurrentScreen}
          />
        )}
        {currentScreen === "LockScreen2" && (
          <LockScreen2
            username={username}
            password={password}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {!isPcOn ? <PowerOffScreen /> : null}
      </div>
    </div>
  );
};

const Icon = (props) => {
  const onIconClick = () => {
    if (props.name === "projector") {
      props.setCurrentScreen("projectorApp");
    } else if (props.name === "chrome") {
      props.setCurrentScreen("chromeApp");
    } else if (props.name === "classeViva") {
      props.setCurrentScreen("classeViva");
    }
  };

  return <div className={"icon " + props.name} onClick={onIconClick} />;
};

const ProjectorApp = (props) => {
  const btn = useRef(null);
  const circle = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (props.gameData.current.isProjectorOn) {
      btn.current.classList.toggle("toggle");
      circle.current.classList.toggle("toggle");
      container.current.classList.toggle("toggle");
    }
  }, []);

  const toggleFunz = () => {
    btn.current.classList.toggle("toggle");
    circle.current.classList.toggle("toggle");
    container.current.classList.toggle("toggle");

    props.gameData.current.isProjectorOn =
      !props.gameData.current.isProjectorOn;
  };

  return (
    <div className="appScreen projectorApp">
      <div className="container" ref={container}>
        <p className="appTitle">Projector App</p>
        <div className="btn" ref={btn} onClick={toggleFunz}>
          <div className="small-circle" ref={circle}></div>
        </div>
      </div>

      <div className="closeApp" onClick={() => props.setCurrentScreen("")}>
        x
      </div>
    </div>
  );
};

const ChromeApp = (props) => {
  const onTabClick = (numTab) => {
    if (numTab === 1) {
      props.setAscensore((prev) => !prev);
      props.setPortaStanza("corridoio", 7, props.ascensore);
      props.setPortaStanza("corridoio", 8, props.ascensore);
      props.setPortaStanza("corridoio", 9, props.ascensore);
    } else if (numTab === 2) {
      props.setLuci((prev) => !prev);
    } else if (numTab === 3) {
      props.setPortaBidelleria((prev) => !prev);
      props.setPortaStanza("bidelleria", 0, props.portaBidelleria);
      props.setPortaStanza("corridoio", 3, props.portaBidelleria);
    }
  };

  return (
    <div className="appScreen chromeApp">
      {props.isServerOn ? (
        <div className="internet">
          <div className="url">https://domoticaDenina.it</div>
          <div className="tabs">
            <div
              className="tab"
              onClick={() => onTabClick(2)}
              style={{
                backgroundColor: props.luci ? "#6BD138" : "#7980A0",
              }}
            >
              luci
            </div>
            <div
              className="tab"
              onClick={() => onTabClick(1)}
              style={{
                backgroundColor: props.ascensore ? "#6BD138" : "#7980A0",
              }}
            >
              ascensore
            </div>
            <div
              className="tab"
              onClick={() => onTabClick(3)}
              style={{
                backgroundColor: props.portaBidelleria ? "#6BD138" : "#7980A0",
              }}
            >
              porta bidelleria
            </div>
          </div>
        </div>
      ) : (
        <div className="noInternet"></div>
      )}
      <div className="closeApp" onClick={() => props.setCurrentScreen("")}>
        x
      </div>
    </div>
  );
};

const ClasseViva = (props) => {
  const salva = () => {
    props.setIsGameTimeRunning(false);
    props.setShowGameCompletedScreen(true);
    props.showGameCompletedScreenRef.current = true;
  };

  return (
    <div className="appScreen chromeApp">
      {props.isServerOn ? (
        <div className="internet">
          <div className="url">https://classeViva.it</div>
          <p>Alunno: Kiki</p>
          <div className="Voti">
            <div className="votoDiv">
              <span>
                Informatica :
                <b style={{ color: props.voto1 > 6 && "green" }}>
                  {" " + props.voto1}
                </b>
              </span>
              <span className="alza" onClick={() => props.setVoto1(10)}>
                Alza
              </span>
            </div>
            <div className="votoDiv">
              <span>
                Matematica :
                <b style={{ color: props.voto2 > 6 && "green" }}>
                  {" " + props.voto2}
                </b>
              </span>
              <span className="alza" onClick={() => props.setVoto2(10)}>
                Alza
              </span>
            </div>
            <div className="votoDiv">
              <span>
                Inglese :
                <b style={{ color: props.voto3 > 6 && "green" }}>
                  {" " + props.voto3}
                </b>
              </span>
              <span className="alza" onClick={() => props.setVoto3(10)}>
                Alza
              </span>
            </div>
            <div className="salva" onClick={salva}>
              SALVA
            </div>
          </div>
        </div>
      ) : (
        <div className="noInternet"></div>
      )}
      <div className="closeApp" onClick={() => props.setCurrentScreen("")}>
        x
      </div>
    </div>
  );
};

const PowerBtn = (props) => {
  const toggle = () => {
    props.setIsPcOn((prev) => !prev);
    props.setCurrentScreen("LockScreen1");
  };

  return <div className={"icon powerOn"} onClick={toggle} />;
};

const PowerLight = (props) => {
  return (
    <div
      className="powerLight"
      style={{ backgroundColor: props.isPcOn ? "#6bd138" : "#292935" }}
    />
  );
};

const LockScreen2 = (props) => {
  const [typedPwd, setTypedPwd] = useState("");

  const checkPwd = () => {
    if (typedPwd === props.password) {
      props.setCurrentScreen("");
    }
  };

  return (
    <div className="lockScreen2Container screen">
      <p>Benvenuto, {props.username}</p>
      <div className="main">
        <input
          type="text"
          placeholder="Password"
          autoFocus
          onChange={(e) => setTypedPwd(e.target.value)}
        />
        <span onClick={checkPwd}>&gt;</span>
      </div>

      <div
        className="back"
        onClick={() => props.setCurrentScreen("LockScreen1")}
      >
        &lt;=
      </div>

      <div className="ubuntu">Ubuntu</div>
    </div>
  );
};

const LockScreen1 = (props) => {
  const onUserClick = () => {
    console.log(props.username);
    if (props.usename === "Preside") {
      props.setCurrentScreen("");
    } else {
      props.setCurrentScreen("LockScreen2");
    }
  };

  return (
    <div className="lockScreen1Container screen">
      <div className="user" onClick={onUserClick}>
        <div className="userImg" />
        <div className="userName">{props.username}</div>
      </div>
      <div className="ubuntu">Ubuntu</div>
    </div>
  );
};

const PowerOffScreen = (props) => {
  return <div className="powerOnScreenContainer screen" />;
};

export default ComputerScreen;
