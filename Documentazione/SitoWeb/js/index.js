/*************** sezione 2 ***************/
mainTestoSez2 = document.querySelector(".testoSez2");
pagBtns = document.querySelectorAll(".navPagine span");

contenutoPagineSez2 = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
   ut malesuada sapien. Nunc vulputate nec felis sed vestibulum.
   Pellentesque habitant morbi tristique senectus et netus et
   malesuada fames ac turpis egestas. <br /><br />
   Sed lacus erat, gravida eu ullamcorper eget, congue sit amet
   augue. Curabitur et metus odio. Phasellus sagittis non tortor
   ac dignissim. Aliquam semper nulla lacus, vitae scelerisque
   velit mollis non.<br /><br />
   Aenean vel erat auctor, efficitur nisl ut, laoreet ligula.
   Pellentesque faucibus lorem eget nunc venenatis hendrerit.<br />`,

  `Curabitur luctus ultrices aliquet. Ut nec iaculis odio, quis bibendum mi.
   Maecenas ultricies malesuada ligula, at auctor velit aliquam at. 
   Fusce interdum congue gravida.<br /><br />
   Phasellus facilisis risus in risus molestie ornare non non ante.<br /><br />
   Phasellus et mauris eu eros consectetur convallis sit amet rutrum ante.
   Praesent luctus mauris ante, id eleifend lorem aliquet at. 
   Sed ultricies lorem lorem, in porttitor velit tempus ut. <br /><br />
   Donec lacus ex, suscipit ut metus sit amet<br />`,

  `Nullam semper posuere venenatis. Donec sit amet fringilla magna.
   Etiam rutrum at quam a posuere. Vivamus commodo ex tellus, <br /><br />
   sit amet iaculis odio fermentum ultrices. Sed facilisis nisi neque, 
   vel placerat magna varius vel. Cras nec lacinia ipsum, at laoreet nisl. 
   Maecenas blandit, urna et gravida dapibus, nunc nulla facilisis dolor, <br /><br />
   ut interdum eros nulla quis augue. 
   Quisque sit amet tortor eget nunc malesuada mollis nec non felis.<br />`,
];

//for per associare evento "click" ad ogni bottone pagina
for (let i = 0; i < pagBtns.length; i++) {
  pagBtns[i].addEventListener("click", () => {
    animateCSS(mainTestoSez2, "fadeOut").then((msg) => {
      mainTestoSez2.innerHTML = contenutoPagineSez2[i];
      animateCSS(mainTestoSez2, "fadeIn");
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
