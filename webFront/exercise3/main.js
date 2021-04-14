let stations;

function retrieveAllContracts() {
    let targetUrl = "https://api.jcdecaux.com/vls/v3/contracts?apiKey=" + document.getElementById("apiKey").value;
    let requestType = "GET";

    let caller = new XMLHttpRequest();
    caller.open(requestType, targetUrl, true);
    // The header set below limits the elements we are OK to retrieve from the server.
    caller.setRequestHeader("Accept", "application/json");
    // onload shall contain the function that will be called when the call is finished.
    caller.onload = contractsRetrieved;

    caller.send();
}

function contractsRetrieved() {
    // Let's parse the response:
    let response = JSON.parse(this.responseText);
    let dataset = document.getElementById("contractsDatalist");
    response.forEach(e => {
        let opt = document.createElement("option")
        opt.setAttribute("value", e.name)
        dataset.appendChild(opt)
    })
}

function retrieveContractStations() {
    let targetUrl = "https://api.jcdecaux.com/vls/v1/stations?apiKey=" + document.getElementById("apiKey").value
        + "&contract=" + document.getElementById("contract").value;
    let req = new XMLHttpRequest();
    req.open("GET", targetUrl, true);
    req.setRequestHeader("Accept", "application/json");
    req.onload = contractStationsRetrieved;
    req.send()
}

function contractStationsRetrieved() {
    stations = JSON.parse(this.responseText);
    console.log(stations);
}

function getNearestStation() {
    let lat = document.getElementById("locationLat").value;
    let long = document.getElementById("locationLong").value;
    let nearestStation;
    let distance_min = Number.MAX_VALUE;
    stations.forEach(station => {
        let d = getDistanceFrom2GpsCoordinates(lat, long, station.position.lat, station.position.lng);
        if (d < distance_min) {
            distance_min = d;
            nearestStation = station;
        }
    })
    document.getElementById("nearestStation").innerText = nearestStation.name
}

function getDistanceFrom2GpsCoordinates(lat1, lon1, lat2, lon2) {
    // Radius of the earth in km
    let earthRadius = 6371;
    let dLat = deg2rad(lat2 - lat1);
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    //console.log(a);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //console.log(c);
    let d = earthRadius * c; // Distance in km
    //console.log(d);
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}