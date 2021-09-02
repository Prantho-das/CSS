const asklocation = () => {
  navigator.geolocation.getCurrentPosition(getlocation, showError);
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getlocation, showError);
}
function getlocation(position) {
  console.log(position);
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}
var myIcon = L.icon({
  iconUrl: "mobile.png",
  iconSize: [40, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

let address = "32,kishoreganj";
let view = [23.777176, 90.399452];
var latlngs = [];

fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`)
  .then((res) => res.json())
  .then((addressfind) => {
    view[0] = addressfind[0].lat;
    view[1] = addressfind[0].lon;
    setTimeout(() => { 
      viewset();
    }, 1500);
  })
  .catch((err) => console.log(err));
let map = L.map("map");

const viewset = () => {
  map.setView(view, 7);
};
viewset();
const mapurl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const maptiles = L.tileLayer(mapurl);

maptiles.addTo(map);

map.on("click", (position) => {
  let latlang = position.latlng;
  latlang = Object.values(latlang);
  latlngs.push([latlang[0], latlang[1]]);
  const marker = L.marker([latlang[0], latlang[1]], {
    draggable: true,
    icon: myIcon,
  });
  marker.on("move", (val) => {
    let oldvalue = Object.values(val.oldLatLng);
    let newvalue = Object.values(val.latlng);

    const index = latlngs.findIndex(
      (value) => value[0] === oldvalue[0] && value[1] === oldvalue[1]
    );
    if (index != -1) {
      latlngs[index][0] = newvalue[0];
      latlngs[index][1] = newvalue[1];
    }
    console.log(index);
    console.log(val);
    console.log(latlngs);
  });
  marker.remove();
  marker.addTo(map);

  var polyline = L.polyline(latlngs, { color: "blue" });
  polyline.remove();
  polyline.addTo(map);
});
