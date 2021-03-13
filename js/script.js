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

  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-appear")) {
      evt.preventDefault();
      popup.classList.remove("modal-appear");
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



    myPlacemark = new ymaps.Placemark(siteMap.getCenter(), {
      hintContent: "NЁRDS DESIGN STUDIO, 191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.svg",
      iconImageSize: [231, 190],
      iconImageOffset: [110, -125]
    });


  siteMap.geoObjects.add(myPlacemark);

}



