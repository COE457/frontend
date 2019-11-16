const updateLocationIcon = () => {
    let latestLocation = JSON.parse(localStorage.getItem("latestLocation"));
    $("#latestLocation").html(latestLocation.location.join());
}
const equipt = () =>{
    $.ajax({
    url: "http://192.168.137.1:3001/API/equipmentHistory/read",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: { Smartwatch: localStorage.getItem("currentSmartwatch") },
    processData: false,
    success: data =>
        {
             let equipt = data.docs[data.docs.length - 1].equipped;
           $("#equiptt").html((equipt)?"Equipt":"Not Equipt");
        }
    
})};