/**
 * @file updates/viewLoad
 *
 * @overview sets an event listener on #contents. When #contents is done loading, a certain set of functions is called
 *
 * Assumptions: - JQuery has been loaded
 *              - util/events.js has been loaded
 *              - interface/table.js has been loaded
 *              - interface/modal.js has been loaded
 *              - db/dataStorage.js had been loaded
 *              - interface/heartRate.js has been loaded
 *              - updates/communication.js loaded
 *
 */
((window, document) => {
  $("#content").on(events.viewReady, () => {
    let page = localStorage.getItem("latestPage");
    switch (
    page //  call functions based on page
    ) {
      case "home":
        $("#content").runThenOn(events.locationUpdated, e => {
          //  when location is updated
          $("#latestLocation").html(
            //  set the latest location under the location icon
            dataStorage.locationHist[0].location[0] +
            ", " +
            dataStorage.locationHist[0].location[1]
          );
        });
        $("#content").runThenOn(events.equipmentUpdated, e => {
          //  when location is updated
          $("#equiptt").html(
            //  set the latest location under the location icon
            dataStorage.equipmentHist[0].equipment ? "equipped" : "not equipped"
          );
          if (dataStorage.panicHist.length !== 0) {
            $("#statusReading").html(`Recent panic at ${new Date(Date.now())}`)
          }

        });

        break;

      case "status":
        $("#content").runThenOn(events.temperatureUpdated, e => {
          let reading = dataStorage.temperatureHist[0].temperature;
          genTemperature("#thermometerRoom", reading.toPrecision(3));
          let readingComment =
            reading < 20
              ? "cold"
              : reading < 25
                ? "cool"
                : reading < 28
                  ? "warm"
                  : "hot";
          $("#roomTempReading").html(readingComment);
        });
        $("#content").runThenOn(events.heartRateUpdated, e => {
          let reading = dataStorage.heartRateHist[0];
          $("#heartRate").empty();
          genHeartRate("#heartRate", reading.heartRate);
          $("#awake").html(reading.awake);
          let readingComment =
            reading.heartRate < 55
              ? "low"
              : reading.heartRate < 75
                ? "ideal"
                : reading.heartRate < 80
                  ? "quite high"
                  : reading.heartRate < 95
                    ? "high"
                    : "very high";

          $("#heartRateReading").html(readingComment);
        });

        break;

      case "location": //  check if data has been received from db then generate location table
        $("#content").runThenOn(`${events.locationUpdated}`, e => {
          let table = genTable(dataStorage.locationHist); //  from interface/table.js
          $("#locationTable")
            .empty()
            .append(table); //  clear table and append new data
          $("#locationFooter")
            .empty()
            .append(
              `<p style:"margin:0">last check: ${new Date(Date.now())}</p>`
            );
        });
        break;

      case "objects":
        $("#content").runThenOn(`${events.objectsUpdated}`, e => {
          let table = genTable(dataStorage.objectHist); //  from interface/table.js
          $("#objectsTable")
            .empty()
            .append(table); //  clear table and append new data
          $("#objectFooter")
            .empty()
            .append(
              `<p style:"margin:0">last check: ${new Date(Date.now())}</p>`
            );
          $(".imageLink").click(e => {
            let imageIdx = e.target.id;
            showModal(
              "viewImage.html#imageContainer",
              "0",
              () => { },
              () => {
                var image = new Image();
                image.src =
                  "data:image/png;base64," + dataStorage.images[imageIdx];
                $("#imageContainer").append(image);
              }
            );
          });
        });
        break;

      case "communication":
        attachCommunicationMessages(); //  attach messages to cards. //  from updates/communication.js
        break;
    }
    hideLoading(); //  hide loading icon //  from interface/modal.js
  });
})(this, this.document);
