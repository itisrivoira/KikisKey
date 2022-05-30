/*************** sezione 1(main) ***************/
bgSez1 = document.querySelector(".mainContenitoreSez1");

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#565656",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/*************** sezione 2 ***************/
mainTestoSez2 = document.querySelector(".testoSez2");
pagBtns = document.querySelectorAll(".navPagine span");

contenutoPagineSez2 = [
  `La storia del gioco è basata su un escape room. Il protagonista, ovvero Kiki, 
   ha l’intezione di rimanere rinchiuso all’interno della scuola per scovare 
   i codici di accesso per poter entrare nel registro elettronico del preside e 
   cambiare i voti di tutti gli studenti.<br /><br />
   Per raggiungere il suo obiettivo Kiki dovrà superare con successo differenti 
   prove e indovinelli sparsi nelle stanze della scuola.<br /><br />
   La missione di Kiki inizia proprio durante un giorno di scuola, 
   più precisamente durante l’intervallo, dove approfitterà dell’occasione
   per nascondersi nella scuola.<br /><br />`,

  `Kiki si trova all’interno del laboratorio di chimica, dove sarà necessario 
  trovare un modo per uscire e iniziare così la sua ricerca.
  Uscito dal laboratorio inizia ad aggirarsi per i corridoi e 
  le stanze della scuola per scovare i codici del registro.<br /><br />
  Quasi tutte le stanze non sono aperte ma non la bideleria che ha 
  una finestra socchiusa.<br /><br /> 
  Sfortunatamente è troppo in alto ma troverà qualcuno ad aiutarlo. 
  Pensandoci bene potrebbe trovare proprio lì dentro ciò che sta cercando, 
  o almeno una parte dei codici di accesso.<br /><br />`,

  `Vagando per la scuola, senza farsi beccare dai bidelli, 
   Kiki trova la biblioteca, dove potrebbe trovare altri indizi utili per la chiave.<br /><br />
   Credendo di avere tutto il necessario per accedere al registro Kiki si dirige 
   verso l’ufficio del preside ma scopre che gli manca qualcosa per entrarci...<br /><br />
   pensadoci bene qualcuno potrebbe dargli ancora una mano,  
   ma nulla è semplice come sembra, infatti dovrà afrrontare una 
   sfida ardua che gli permetterà di raggiungere l’obiettivo finale 
   per cui ha faticato durante quest’avventura.<br /><br />`,
];

//for per associare evento "click" ad ogni bottone pagina
for (let i = 0; i < pagBtns.length; i++) {
  pagBtns[i].addEventListener("click", () => {
    let tlAnimaTestoSez2 = gsap.timeline({ repeatDelay: 1 });

    tlAnimaTestoSez2
      .set(".testoSez2", { opacity: 1 })
      .to(".testoSez2", { opacity: 0, duration: 0.5 })
      .then(() => {
        mainTestoSez2.innerHTML = contenutoPagineSez2[i];
      })
      .then(() => {
        tlAnimaTestoSez2.to(".testoSez2", { opacity: 1, duration: 0.5 });
      });

    //for per controllare bottone pagina cliccato e per cambiare l'opacita
    for (let k = 0; k < pagBtns.length; k++) {
      if (k == i) {
        pagBtns[k].style.opacity = "1";
      } else {
        pagBtns[k].style.opacity = "0.6";
      }
    }
  });
}

/*************** sezione 3 ***************/

const characterInfo = [
  {
    name: "Kiki",
    desc: "Kiki è il protagonista della vicenda che dovrà affrontarediverse prove per portare a termine il suo obiettivo. Una sua peculiarità è il suo braccio robotico che sarà poi essenziale per poter completare la sua avventura.",
    img: "./assets/img/home/kiki.gif",
  },
  {
    name: "Bidello",
    desc: "I bidelli sono delle persone ostili che cercheranno di intralciare Kiki a tutti i costi, cercando di trovarla mentre vaga per tutta la scuola. Bisogna stargli alla larga se non si vuole finire in grossi guai.",
    img: "./assets/img/home/bidello.gif",
  },
];

let characterNameDom = document.querySelector(".characterName");
let characterDescDom = document.querySelector(".characterDesc");
let characterImgDom = document.querySelector(".characterImg");

let leftArrowBtn = document.querySelector(".leftArrowDiv");
let rightArrowBtn = document.querySelector(".rightArrowDiv");

let indexCharacterCorrente = 0;
const numCharacters = 2;

const updateCharacterImg = () => {
  for (let i = 0; i < characterInfo.length; i++) {
    if (indexCharacterCorrente == i) {
      characterImgDom.style.backgroundImage = "url('" + characterInfo[i].img;
      +"')";
      console.log("url('" + characterInfo[i].img + "')");
    }
  }
};

const updateCharacterInfo = () => {
  for (let i = 0; i < characterInfo.length; i++) {
    if (indexCharacterCorrente == i) {
      characterNameDom.innerText = characterInfo[i].name;
      characterDescDom.innerText = characterInfo[i].desc;
    }
  }
};

updateCharacterImg();
updateCharacterInfo();

let tlAnimaChaImgSez3 = gsap.timeline();
let tlAnimaChaInfoSez3 = gsap.timeline();

leftArrowBtn.addEventListener("click", () => {
  if (indexCharacterCorrente > 0) {
    indexCharacterCorrente--;

    tlAnimaChaImgSez3
      .set(".characterImg", { scaleX: 1, scaleY: 1, opacity: 1 })
      .to(".characterImg", { scaleX: 1.3, scaleY: 1.3, opacity: 0 })
      .then(() => {
        updateCharacterImg();
      })
      .then(() => {
        tlAnimaChaImgSez3.to(".characterImg", {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
        });
      });

    tlAnimaChaInfoSez3
      .set(".characterInfo", { opacity: 1, y: 0 })
      .to(".characterInfo", { opacity: 0, y: 100 })
      .then(() => {
        updateCharacterInfo();
      })
      .then(() => {
        tlAnimaChaInfoSez3
          .set(".characterName", {
            opacity: 0,
            y: 0,
          })
          .to(".characterInfo", {
            opacity: 1,
            y: 0,
          })
          .to(".characterName", {
            opacity: 1,
          });
      });
  }

  if (indexCharacterCorrente == 0) {
    document.querySelector(".leftArrow").style.backgroundColor = "#737373";
    document.querySelector(".rightArrow").style.backgroundColor = "#d1a62a";
  }
  if (indexCharacterCorrente == numCharacters - 1) {
    document.querySelector(".leftArrow").style.backgroundColor = "#d1a62a";
    document.querySelector(".rightArrow").style.backgroundColor = "#737373";
  }
});

rightArrowBtn.addEventListener("click", () => {
  if (indexCharacterCorrente < numCharacters - 1) {
    indexCharacterCorrente++;

    tlAnimaChaImgSez3
      .set(".characterImg", { scaleX: 1, scaleY: 1, opacity: 1 })
      .to(".characterImg", { scaleX: 1.3, scaleY: 1.3, opacity: 0 })
      .then(() => {
        updateCharacterImg();
      })
      .then(() => {
        tlAnimaChaImgSez3.to(".characterImg", {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
        });
      });

    tlAnimaChaInfoSez3
      .set(".characterInfo", { opacity: 1, y: 0 })
      .to(".characterInfo", { opacity: 0, y: 100 })
      .then(() => {
        updateCharacterInfo();
      })
      .then(() => {
        tlAnimaChaInfoSez3
          .set(".characterName", {
            opacity: 0,
            y: 0,
          })
          .to(".characterInfo", {
            opacity: 1,
            y: 0,
          })
          .to(".characterName", {
            opacity: 1,
          });
      });
  }

  console.log(indexCharacterCorrente);
  if (indexCharacterCorrente == 0) {
    document.querySelector(".leftArrow").style.backgroundColor = "#737373";
    document.querySelector(".rightArrow").style.backgroundColor = "#d1a62a";
  }
  if (indexCharacterCorrente == numCharacters - 1) {
    document.querySelector(".leftArrow").style.backgroundColor = "#d1a62a";
    document.querySelector(".rightArrow").style.backgroundColor = "#737373";
  }
});
