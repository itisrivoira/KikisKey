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
