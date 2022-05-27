const showLoadingScreen = () => {
  let loadingScreen = document.querySelector(".loaderScreen");
  loadingScreen.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    gsap
      .fromTo(".loaderScreen", { opacity: 1 }, { opacity: 0, duration: 0.5 })
      .then(() => {
        loadingScreen.style.display = "none";
      });

    document.body.style.overflow = "visible";
  }, Math.floor(Math.random() * 2500) + 1000);
};
showLoadingScreen();

let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.href = "./index.html";
});

let menuBtn = document.querySelector(".menuInput");
let overlayMenu = document.querySelector(".overlayMenu");
menuBtn.addEventListener("click", () => {
  if (menuBtn.checked) {
    overlayMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    overlayMenu.style.display = "none";
    document.body.style.overflow = "scroll";
  }
});

if (sessionStorage.getItem("currentPage") == undefined) {
  sessionStorage.setItem("currentPage", "home");
}

let tabsDot = [];
let tabs = document.querySelectorAll(".tabs span");
let menuTabs = document.querySelectorAll(".tabsOverlayMenu span a");

for (let i = 0; i < tabs.length; i++) {
  tabsDot.push(window.getComputedStyle(tabs[i], ":after"));

  tabs[i].addEventListener("click", (e) => {
    if (e.target.innerText == "home") {
      sessionStorage.setItem("currentPage", "home");
    }
    if (e.target.innerText == "about us") {
      sessionStorage.setItem("currentPage", "aboutUs");
    }
    if (e.target.innerText == "contacts") {
      sessionStorage.setItem("currentPage", "contacts");
    }
    showLoadingScreen();
  });

  menuTabs[i].addEventListener("click", (e) => {
    if (e.target.innerText == "home") {
      sessionStorage.setItem("currentPage", "home");
    }
    if (e.target.innerText == "about us") {
      sessionStorage.setItem("currentPage", "aboutUs");
    }
    if (e.target.innerText == "contacts") {
      sessionStorage.setItem("currentPage", "contacts");
    }
  });
}

if (sessionStorage.getItem("currentPage") === "home") {
  document.documentElement.style.setProperty("--displayHomeDot", "block");
  document.documentElement.style.setProperty("--displayAboutUsDot", "none");
  document.documentElement.style.setProperty("--displayContactsDot", "none");

  menuTabs[0].style.color = "#e5b62e";
  menuTabs[1].style.color = "#333333";
  menuTabs[2].style.color = "#333333";
}

if (sessionStorage.getItem("currentPage") === "aboutUs") {
  document.documentElement.style.setProperty("--displayHomeDot", "none");
  document.documentElement.style.setProperty("--displayAboutUsDot", "block");
  document.documentElement.style.setProperty("--displayContactsDot", "none");

  menuTabs[0].style.color = "#333333";
  menuTabs[1].style.color = "#e5b62e";
  menuTabs[2].style.color = "#333333";
}

if (sessionStorage.getItem("currentPage") === "contacts") {
  document.documentElement.style.setProperty("--displayHomeDot", "none");
  document.documentElement.style.setProperty("--displayAboutUsDot", "none");
  document.documentElement.style.setProperty("--displayContactsDot", "block");

  menuTabs[0].style.color = "#333333";
  menuTabs[1].style.color = "#333333";
  menuTabs[2].style.color = "#e5b62e";
}

let copyrightContenitore = document.querySelector(".contenitoreCopyright");
const d = new Date();

copyrightContenitore.innerText =
  "© " + d.getFullYear() + " Copyright: KikisKey.it";
