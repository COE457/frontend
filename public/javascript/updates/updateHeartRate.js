/**
 * @file updates/updateHeartRate
 * 
 * @description updates "heartRateHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/heartRateHistory.js have been loaded
 *              - db/dataStorage.js have been loaded
 *              - util/frequencies.js have been loaded
 *              - JQuery have been loaded
 *              - util/events.js has been loaded 
 */

((window, document) => {
    /**
     * @function fetchHeartRates
     * @description fetches the heartRates using API calls
     * @fires readHeartRateHist()
     * @return {Array<Object>}
     */
    const fetchHeartRates = async () => {
      var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
      if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
        console.log("cannot get heartRates without choosing a child first");
        return Promise.reject("setAChild"); //  exit the function and reject promise
      } else {
        try {
          const heartRates = await readHeartRateHist({ Smartwatch: smartwatch }); //  get heartRates associated with the current watch //  from db/actions/heartRate.js
          return Promise.resolve(heartRates);//  exit the function and resolve promise
        } catch (err) { //  in case of db error
          console.error(err.responseText);
          return Promise.reject(err); //  reject promise and exit
        }
      }
    };
  
    /**
     * @function prepareData
     * @description reformats db data and stores it in the temp storage object
     * @fires fetchHeartRates()
     * @fires "newHeartRate"
     * @fires "heartRateUpdated"
     */
    const prepareData = async () => {
      try {
        let heartRates = await fetchHeartRates(); //  getting heartRates 
        var heartRatesObj = []; //  for formatting data
        heartRates.rows.forEach(item => { //  formatting data to suite table 
          heartRatesObj.push({
            date: new Date(item.key[1]),
            heartRate: item.value[1],
            awake: item.value[0]
          })
        })
        // if (dataStorage.heartRateHist) {
        //   if (heartRatesObj[0].heartRate[0] !== dataStorage.heartRateHist[0].heartRate[0]
        //     || heartRatesObj[1].heartRate[1] !== dataStorage.heartRateHist[1].heartRate[1]) {
        //     $("body").trigger(events.newHeartRate);
        //   }
        // }
        dataStorage.heartRateHist = heartRatesObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
        $("#content").trigger(events.heartRateUpdated);
      } catch (err) { console.error(err.responseText); }
    }
  
    //  fetching data once 
    prepareData();
    //  fetching data again every 5 seconds
    setInterval(async () => {
      prepareData();
    }, frequencies.heartRateUpdate);
  })(this, this.document);
  
  
  