let sendBtn = document.querySelector("#send");

emailjs.init("BuVQ2yQbSAjln12nx");

const showToast = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "#4D4D4F",
      fontSize: "15px",
      paddingLeft: "30px",
      paddingRight: "30px",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    offset: {
      y: 10,
    },
  }).showToast();
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

sendBtn.addEventListener("click", () => {
  let nome = document.querySelector("#name");
  let email = document.querySelector("#email");
  let msg = document.querySelector("#msg");
  if (nome.value != "") {
    if (email.value != "" && validateEmail(email.value) != null) {
      if (msg.value != "") {
        emailjs.send("service_1alygmg", "template_2yji4y8", {
          name: nome.value,
          email: email.value,
          message: msg.value,
        });

        nome.value = "";
        email.value = "";
        msg.value = "";

        showToast("msg ricevuto!");
      } else {
        showToast("msg non valido");
      }
    } else {
      showToast("email non valido");
    }
  } else {
    showToast("nome non valido");
  }
});
