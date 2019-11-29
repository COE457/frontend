/**
 * @file updates/updateLocation
 * 
 * @description updates "locationHist" in the dataStorage 
 */


/**
 * @function fetchLocations
 * @description fetches the locations using API calls
 * @fires readLocationHist()
 * @return {Array<Object>}
 */
const fetchLocations = async () => {
  var smartwatch = localStorage.getItem("currentSmartwatch");
  if (smartwatch === null) {
    console.log("cannot get locations without choosing a child first");
    return Promise.reject("setAChild");
  } else {
    try {
      const locations = await readLocationHist({ Smartwatch: smartwatch });
      return locations;
    } catch (err) {
      console.log(err);
    }
  }
};


(async (window, document) => {
  console.log("hi");
  let locations = await fetchLocations();
  dataStorage.locationHist = locations.docs;
  
  setInterval(async () => {
    locations = await fetchLocations();
    dataStorage.locationHist = locations.docs;
  }, 5000);
})(this, this.document);


