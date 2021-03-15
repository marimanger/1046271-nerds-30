// popup
const btn = document.querySelector(".contact-info .button");
const popup = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const form = popup.querySelector(".feedback-form");
const username = popup.querySelector("[name=username]");
const email = popup.querySelector("[name=user_email");
const message = popup.querySelector("[name=user_feedback]");

let isStorageSupport = true;
let usernameFromStorage = "";
let emailFromStorage = "";

try {
  usernameFromStorage = localStorage.getItem("username");
  emailFromStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;

};


btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-appear");
  if (usernameFromStorage) {
    if (usernameFromStorage) {
     username.value = usernameFromStorage;
     email.focus();
    } else {
     email.value = emailFromStorage;
     message.focus();
    }
    } else {
     username.focus();
    }

});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-appear");
  popup.classList.remove("modal-error");

});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-appear")) {
      evt.preventDefault();
      popup.classList.remove("modal-appear");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", username.value);
      }
    }

  }

});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }

});



// The ymaps.ready() function will be called when
// all the API components are loaded and the DOM tree is generated.
ymaps.ready(init);
function init() {
  // Creating the map.
  let siteMap = new ymaps.Map("map", {

    center: [59.939113, 30.321420],
    // Zoom level. Acceptable values:
    // from 0 (the entire world) to 19.
    zoom: 17
  });
  siteMap.controls.remove("geololocationControl");
  siteMap.controls.remove("rulerControl");
  siteMap.controls.remove("zoomControl");
  siteMap.controls.remove("searchControl");
  siteMap.controls.remove("trafficControl");
  siteMap.behaviors.disable("scrollZoom");


  // Creating a placemark.
  sitePlacemark = new ymaps.Placemark(siteMap.getCenter(), {
    hintContent: "NЁRDS DESIGN STUDIO, 191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8"
  }, {
    iconImageSize: [230, 200],
    iconImageOffset: [115, -130],
    iconLayout: "default#image",
    iconImageHref: "img/map-marker.svg"

  });

  siteMap.geoObjects.add(sitePlacemark);

}




