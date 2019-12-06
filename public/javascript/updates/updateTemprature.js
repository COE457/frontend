/**
 * @file updates/updateTemperature
 * 
 * @description updates "locationHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/location.js have been loaded
 *              - db/dataStorage.js have been loaded
 */

((window, document) => {
    /**
     * @function fetchTemperatures
     * @description fetches the locations using API calls
     * @fires readTemperatureHist()
     * @return {Array<Object>}
     */
    const fetchTemperatures = async () => {
      var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
      if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
        console.log("cannot get locations without choosing a child first");
        return Promise.reject("setAChild"); //  exit the function and reject promise
      } else {
        try {
          const locations = await readTemperatureHist({ Smartwatch: smartwatch }); //  get locations associated with the current watch //  from db/actions/location.js
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
     * @fires fetchTemperatures()
     * @fires "newTemperature"
     * @fires "locationUpdated"
     */
    const prepareData = async () => {
      try {
        let locations = await fetchTemperatures(); //  getting locations 
        var locationsObj = []; //  for formatting data
        locations.rows.forEach(item => { //  formatting data to suite table 
          locationsObj.push({
            date: new Date(item.key),
            location: item.value[2],
            currentlyThere: item.value[0]
          })
        })
        if (dataStorage.locationHist) {
          if (locationsObj[0].location[0] !== dataStorage.locationHist[0].location[0]
            || locationsObj[1].location[1] !== dataStorage.locationHist[1].location[1]) {
            $("body").trigger(events.newTemperature);
          }
        }
        dataStorage.locationHist = locationsObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
        $("#content").trigger(events.locationUpdated);
      } catch (err) { console.error(err.responseText); }
    }
  
    //  fetching data once 
    prepareData();
    //  fetching data again every 5 seconds
    setInterval(async () => {
      prepareData();
    }, frequencies.locationUpdate);
  })(this, this.document);
  
  
  