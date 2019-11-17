const updateLocationIcon = () => {
  let latestLocation = JSON.parse(localStorage.getItem("latestLocation"));
  $("#latestLocation").html(latestLocation.location.join());
};
const equipt = () => {
  $.ajax({
    url: "http://192.168.137.1:3001/API/equipmentHistory/read",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: { Smartwatch: localStorage.getItem("currentSmartwatch") },
    processData: false,
    success: data => {
      let equipt = parseInt(data.docs[data.docs.length - 1].equipped);
      $("#equiptt").html(equipt ? "Equipt" : "Not Equipt");
    }
  });
};

function awake() {
  /**@function Snap() <= snap.svg-min.js */
  $.ajax({
    url: "http://192.168.137.1:3001/API/heartrateHistory/read",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: { Smartwatch: localStorage.getItem("currentSmartwatch") },
    processData: false,
    success: data => {

      let awake = data.docs[data.docs.length - 1].reading[1];
      for(var i = 2; i <= data.docs.length; i++) {
        if(awake <= 0) {
          awake = parseInt(data.docs[data.docs.length - i].reading[1]);
        }
      }
      $("#awake").html(awake ? "Awake" : "Not Awake");
    }
  });
}
