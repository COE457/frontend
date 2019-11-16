const updateLocationIcon = () => {
    let latestLocation = JSON.parse(localStorage.getItem("latestLocation"));
    $("#latestLocation").html(latestLocation.location.join());
}