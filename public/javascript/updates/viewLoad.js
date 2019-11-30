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
    switch (page) { //  call functions based on page
      case "location": //  check if data has been received from db then generate location table 
        $("#content").on(events.locationUpdated, e => {
          let table = genTable(dataStorage.locationHist); //  from interface/table.js
          $("#locationTable").empty().append(table); //  clear table and append new data
        })
        break;
    }
    hideLoading(); //  hide loading icon //  from interface/modal.js
  });
})(this, this.document);
