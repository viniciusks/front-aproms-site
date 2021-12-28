// TODO: Terminar mapa
let Windows = [];
let map;

function initMap() {
  const dourados = { lat: -22.2218, lng: -54.8064 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    mapTypeControl: false,
    center: dourados,
    mapTypeId: "roadmap",
  });

  const marker = new google.maps.Marker({
    position: dourados,
    map: map,
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  // TODO: Alterar para atualização dinâmica
  var script = document.createElement("script");
  script.src = "./assets/js/geo-json.js";

  document.getElementsByTagName("head")[0].appendChild(script);
  window.eqfeed_callback = (results) => {
    for (var i = 0; i < results.features.length; i++) {
      var image = "./assets/img/icons/posto.png";
      var coords = results.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      var posicao = coords[1] + ";" + coords[0];
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
      });

      var infowindow = new google.maps.InfoWindow({
        content: posicao,
      });

      // bind the info window to the marker
      bindInfoWindow(marker, map, infowindow);
    }
  };
}

function bindInfoWindow(marker, map, infowindow) {
  closeOtherWindows();
  marker.addListener("click", () => {
    infowindow.content;
    mostrapostomapa(infowindow.content);
  });

  // Add the window of the clicked marker to the list so it can be closed next.
  Windows[0] = infowindow;
}

function mostrapostomapa(posicao) {
  var res = posicao.replace(",", ";");
  var ajax = new XMLHttpRequest();
  var cPar = "par=COOR;" + res;

  if (ajax) {
    ajax.open(
      "POST",
      "../aproms/aproms.dll/dadosposto?" + cPar,
      true
    );
    ajax.setRequestHeader("http-equiv", "pragma");
    ajax.setRequestHeader("content", "no-cache");
    ajax.onreadystatechange = function () {
      if (ajax.responseText.slice(0, 3) == "SIM") {
        // $("#float-dados").fadeIn(500);
        // document.getElementById("float-dados").innerHTML =
        //   ajax.responseText.slice(3, ajax.responseText.lenght);
        // ok = "S";
      } else if (ajax.responseText.slice(0, 3) == "NAO") {
        // $("#float-dados").fadeIn(500);
        // document.getElementById("float-dados").innerHTML =
        //   ajax.responseText.slice(3, ajax.responseText.lenght);
      }
    };
    ajax.send(null);
  }
}

function closeOtherWindows() {
  if (Windows.length > 0) {
    // call the .close() method
    Windows[0].close();
    // reset the array count to 0
    Windows.length = 0;
  }
}
