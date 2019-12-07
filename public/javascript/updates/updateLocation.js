/**
 * @file updates/updateLocation
 * 
 * @description updates "locationHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/location.js have been loaded
 *              - db/dataStorage.js have been loaded
 */

((window, document) => {
  /**
   * @function fetchLocations
   * @description fetches the locations using API calls
   * @fires readLocationHist()
   * @return {Array<Object>}
   */
  const fetchLocations = async () => {
    var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
    if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
      console.log("cannot get locations without choosing a child first");
      return Promise.reject("setAChild"); //  exit the function and reject promise
    } else {
      try {
        const locations = await readLocationHist({ Smartwatch: smartwatch }); //  get locations associated with the current watch //  from db/actions/location.js
        return Promise.resolve(locations);//  exit the function and resolve promise
      } catch (err) { //  in case of db error
        console.error(err.responseText);
        return Promise.reject(err); //  reject promise and exit
      }
    }
  };

  /**
   * @function prepareData
   * @description reformats db data and stores it in the temp storage object
   * @fires fetchLocations()
   * @fires "newLocation"
   * @fires "locationUpdated"
   */
  const prepareData = async () => {
    try {
      let locations = await fetchLocations(); //  getting locations 
      var locationsObj = []; //  for formatting data
      locations.rows.forEach(item => { //  formatting data to suite table 
        locationsObj.push({
          date: new Date(item.key[1]),
          location: item.value
        })
      })
      if (dataStorage.locationHist) {
        if (locationsObj[0].location[0] !== dataStorage.locationHist[0].location[0]
          || locationsObj[1].location[1] !== dataStorage.locationHist[1].location[1]) {
          $("body").trigger(events.newLocation);
        }
      }
      dataStorage.locationHist = locationsObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
      $("#content").trigger(events.locationUpdated);
    } catch (err) { console.error(err); }
  }

  //  fetching data once 
  prepareData();
  //  fetching data again every 5 seconds
  setInterval(async () => {
    prepareData();
  }, frequencies.locationUpdate);
})(this, this.document);


