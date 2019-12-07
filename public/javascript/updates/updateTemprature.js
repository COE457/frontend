/**
 * @file updates/updateTemperature
 * 
 * @description updates "temperatureHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/roomTempHistory.js have been loaded
 *              - db/dataStorage.js have been loaded
 *              - util/frequencies.js have been loaded
 *              - JQuery have been loaded
 *              - util/events.js has been loaded 
 */

((window, document) => {
    /**
     * @function fetchTemperatures
     * @description fetches the temperatures using API calls
     * @fires readTemperatureHist()
     * @return {Array<Object>}
     */
    const fetchTemperatures = async () => {
      var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
      if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
        console.log("cannot get temperatures without choosing a child first");
        return Promise.reject("setAChild"); //  exit the function and reject promise
      } else {
        try {
          const temperatures = await readTemperatureHist(); //  get temperatures associated with the current watch //  from db/actions/temperature.js
          return Promise.resolve(temperatures);//  exit the function and resolve promise
        } catch (err) { //  in case of db error
          console.error(err);
          return Promise.reject(err); //  reject promise and exit
        }
      }
    };
  
    /**
     * @function prepareData
     * @description reformats db data and stores it in the temp storage object
     * @fires fetchTemperatures()
     * @fires "newTemperature"
     * @fires "temperatureUpdated"
     */
    const prepareData = async () => {
      try {
        let temperatures = await fetchTemperatures(); //  getting temperatures 
        var temperaturesObj = []; //  for formatting data
        temperatures.rows.forEach(item => { //  formatting data to suite table 
          temperaturesObj.push({
            date: new Date(item.key),
            temperature: item.value,
          })
        })
        // if (dataStorage.temperatureHist) {
        //   if (temperaturesObj[0].temperature[0] !== dataStorage.temperatureHist[0].temperature[0]
        //     || temperaturesObj[1].temperature[1] !== dataStorage.temperatureHist[1].temperature[1]) {
        //     $("body").trigger(events.newTemperature);
        //   }
        // }
        dataStorage.temperatureHist = temperaturesObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
        $("#content").trigger(events.temperatureUpdated);
      } catch (err) { console.error(err.responseText); }
    }

    //  fetching data once 
    prepareData();
    //  fetching data again every 5 seconds
    setInterval(async () => {
      prepareData();
    }, frequencies.temperatureUpdate);
  })(this, this.document);
  
  
  