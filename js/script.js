// popup
const btn = document.querySelector(".contact-info .button");
const popup = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const username = popup.querySelector("[name=username]")


btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-appear");
  username.focus();

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-appear");

});

window.addEventListener("keydown", function (evt) {

  if(evt.keyCode === 27) {
    if (popup.classList.contains("modal-appear")) {
      evt.preventDefault();
      popup.classList.remove("modal-appear");
    }

  }

});

