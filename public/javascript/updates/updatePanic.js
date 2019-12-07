/**
 * @file updates/updatePanic
 * 
 * @description updates "panicHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/panic.js have been loaded
 *              - db/dataStorage.js have been loaded
 */

((window, document) => {
    /**
     * @function fetchPanics
     * @description fetches the panics using API calls
     * @fires readPanicHist()
     * @return {Array<Object>}
     */
    const fetchPanics = async () => {
      var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
      if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
        console.log("cannot get panics without choosing a child first");
        return Promise.reject("setAChild"); //  exit the function and reject promise
      } else {
        try {
          const panics = await readPanicHist({ Smartwatch: smartwatch }); //  get panics associated with the current watch //  from db/actions/panic.js
          return Promise.resolve(panics);//  exit the function and resolve promise
        } catch (err) { //  in case of db error
          console.error(err.responseText);
          return Promise.reject(err); //  reject promise and exit
        }
      }
    };
  
    /**
     * @function prepareData
     * @description reformats db data and stores it in the temp storage object
     * @fires fetchPanics()
     * @fires "newPanic"
     * @fires "panicUpdated"
     */
    const prepareData = async () => {
      try {
        let panics = await fetchPanics(); //  getting panics 
        var panicsObj = []; //  for formatting data
        panics.rows.forEach(item => { //  formatting data to suite table 
          panicsObj.push({
            date: new Date(item.key[1]),
            panic: item.value
          })
        })

        dataStorage.panicHist = panicsObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
        $("#content").trigger(events.panicUpdated);
      } catch (err) { console.error(err); }
    }
  
    //  fetching data once 
    prepareData();
    //  fetching data again every 5 seconds
    setInterval(async () => {
      prepareData();
    }, frequencies.panicUpdate);
  })(this, this.document);
  
  
  