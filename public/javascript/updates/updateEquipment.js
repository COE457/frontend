/**
 * @file updates/updateEquipment
 * 
 * @description updates "equipmentHist" in the dataStorage 
 * 
 * Assumptions: - db/actions/equipmentHistory.js have been loaded
 *              - db/dataStorage.js have been loaded
 *              - util/frequencies.js have been loaded
 *              - JQuery have been loaded
 *              - util/events.js has been loaded 
 */

((window, document) => {
    /**
     * @function fetchEquipments
     * @description fetches the equipments using API calls
     * @fires readEquipmentHist()
     * @return {Array<Object>}
     */
    const fetchEquipments = async () => {
      var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
      if (smartwatch === null) { //  don't do anything unless a smartwatch is chosen
        console.log("cannot get equipments without choosing a child first");
        return Promise.reject("setAChild"); //  exit the function and reject promise
      } else {
        try {
          const equipments = await readEquipmentHist({ Smartwatch: smartwatch }); //  get equipments associated with the current watch //  from db/actions/equipment.js
          return Promise.resolve(equipments);//  exit the function and resolve promise
        } catch (err) { //  in case of db error
          console.error(err.responseText);
          return Promise.reject(err); //  reject promise and exit
        }
      }
    };
  
    /**
     * @function prepareData
     * @description reformats db data and stores it in the temp storage object
     * @fires fetchEquipments()
     * @fires "newEquipment"
     * @fires "equipmentUpdated"
     */
    const prepareData = async () => {
      try {
        let equipments = await fetchEquipments(); //  getting equipments 
        var equipmentsObj = []; //  for formatting data
        equipments.rows.forEach(item => { //  formatting data to suite table 
          equipmentsObj.push({
            date: new Date(item.key),
            equipment: item.value[2],
            currentlyThere: item.value[0]
          })
        })
        if (dataStorage.equipmentHist) {
          if (equipmentsObj[0].equipment[0] !== dataStorage.equipmentHist[0].equipment[0]
            || equipmentsObj[1].equipment[1] !== dataStorage.equipmentHist[1].equipment[1]) {
            $("body").trigger(events.newEquipment);
          }
        }
        dataStorage.equipmentHist = equipmentsObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
        $("#content").trigger(events.equipmentUpdated);
      } catch (err) { console.error(err.responseText); }
    }
  
    //  fetching data once 
    prepareData();
    //  fetching data again every 5 seconds
    setInterval(async () => {
      prepareData();
    }, frequencies.equipmentUpdate);
  })(this, this.document);
  
  
  