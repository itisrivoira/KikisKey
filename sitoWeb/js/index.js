/*************** sezione 1(main) ***************/
bgSez1 = document.querySelector(".mainContenitoreSez1");

const createMovingBg = () => {
  mvBg = document.createElement("div");
  mvBg.setAttribute("class", "movingBg");
  bgSez1.appendChild(mvBg);
};

setInterval(async function () {
  createMovingBg();
  tlAnimaBg = gsap.to(".movingBg", {
    x: bgSez1.offsetWidth,
    duration: 5,
    ease: "none",
  });
}, Math.floor(Math.random() * 3000) + 5000);

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
      .to(".testoSez2", { opacity: 0, duration: 0.8 })
      .then(() => {
        mainTestoSez2.innerHTML = contenutoPagineSez2[i];
      })
      .then(() => {
        tlAnimaTestoSez2.to(".testoSez2", { opacity: 1, duration: 0.8 });
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
