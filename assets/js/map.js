var map;

function GetMap() {
  map = new Microsoft.Maps.Map(document.getElementById("map"), {
    credentials:
      "AoaKYK-QGm9UK736uSMd5bHiuFhEe6tNOCVUDM8HeoE_hPj8mY90Z5KJHhRiRNHr",
    center: new Microsoft.Maps.Location(-22.2218, -54.8064),
    mapTypeId: Microsoft.Maps.MapTypeId.street,
    zoom: 10,
  });

  let coords = getCordinates();
  let pins = [];
  var center = map.getCenter();
  var pinCenter = new Microsoft.Maps.Pushpin(center, {
    icon: "assets/img/icons/posto.png",
    anchor: new Microsoft.Maps.Point(12, 39),
  });

  coords.forEach((element) => {
    //Create custom Pushpin
    let pin = new Microsoft.Maps.Pushpin(
      {
        latitude: element.latitude,
        longitude: element.longitude,
        altitude: element.altitude,
        altitudeReference: element.altitudeReference,
      },
      {
        icon: "assets/img/icons/posto.png",
        anchor: new Microsoft.Maps.Point(12, 39),
      }
    );

    pins.push(pin);
  });

  pins.push(pinCenter);

  map.entities.push(pins);
}

function calculateRoute() {
  let startState = $("#startState").val();
  let startCity = $("#startCity").val();
  let endState = $("#endState").val();
  let endCity = $("#endCity").val();

  let coordStart = getLocations(startState, startCity);
  let coordEnd = getLocations(endState, endCity);

  Microsoft.Maps.loadModule("Microsoft.Maps.Directions", function () {
    let directionsManager = new Microsoft.Maps.Directions.DirectionsManager(
      map
    );

    // Set Route Mode to driving
    directionsManager.setRequestOptions({
      routeMode: Microsoft.Maps.Directions.RouteMode.driving,
    });

    let waypoint1 = new Microsoft.Maps.Directions.Waypoint({
      address: coordStart.address,
      location: new Microsoft.Maps.Location(
        coordStart.coordinates[0],
        coordStart.coordinates[1]
      ),
    });
    let waypoint2 = new Microsoft.Maps.Directions.Waypoint({
      address: coordEnd.address,
      location: new Microsoft.Maps.Location(
        coordEnd.coordinates[0],
        coordEnd.coordinates[1]
      ),
    });

    directionsManager.addWaypoint(waypoint1);
    directionsManager.addWaypoint(waypoint2);
    // Set the element in which the itinerary will be rendered
    directionsManager.calculateDirections();
  });
}

function getLocations(state, city) {
  let infos = {
    address: "",
    coordinates: [],
  };

  $.ajax({
    url: `http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=BR&adminDistrict=${state}&locality=${city}&key=AoaKYK-QGm9UK736uSMd5bHiuFhEe6tNOCVUDM8HeoE_hPj8mY90Z5KJHhRiRNHr`,
    dataType: "json",
    async: false,
    success: function (response) {
      infos.address = response.resourceSets[0].resources[0].name;
      infos.coordinates =
        response.resourceSets[0].resources[0].point.coordinates;
    },
    error: function (response) {
      alert(response);
    },
  });

  return infos;
}

function getCordinates() {
  let coords = [
    {
      latitude: -5.02943,
      longitude: -44.43244,
      altitude: 0,
      altitudeReference: -1,
    },
    {
      latitude: -27.194447,
      longitude: -53.2799,
      altitude: 0,
      altitudeReference: -1,
    },
    {
      latitude: -26.17799,
      longitude: -50.92193,
      altitude: 0,
      altitudeReference: -1,
    },
    {
      latitude: -16.41912,
      longitude: -54.70328,
      altitude: 0,
      altitudeReference: -1,
    },
    {
      latitude: -22.30432,
      longitude: -54.76934,
      altitude: 0,
      altitudeReference: -1,
    },
    {
      latitude: -21.75214,
      longitude: -52.14423,
      altitude: 0,
      altitudeReference: -1,
    },
  ];

  return coords;
}
