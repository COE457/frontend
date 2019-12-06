/**
 * @file updates/viewLoad
 *
 * @overview sets an event listener on #contents. When #contents is done loading, a certain set of functions is called
 *
 * Assumptions: - JQuery has been loaded
 *              - util/events.js has been loaded
 *              - interface/table.js has been loaded
 *              - interface/modal.js has been loaded
 *
 */
((window, document) => {
  $("#content").on(events.viewReady, () => {
    let page = localStorage.getItem("latestPage");
    switch (
      page //  call functions based on page
    ) {
      case "home":
        $("#content").runThenOn(events.locationUpdated, e => { //  when location is updated
          $("#latestLocation").html( //  set the latest location under the location icon
            dataStorage.locationHist[0].location[0] +
              ", " +
              dataStorage.locationHist[0].location[1]
          );
        });
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
    }
    hideLoading(); //  hide loading icon //  from interface/modal.js
  });
})(this, this.document);
