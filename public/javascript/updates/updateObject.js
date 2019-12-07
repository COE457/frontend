/**
 * @file updates/updateObject
 *
 * @description updates "objectHist" in the dataStorage
 *
 * Assumptions: - db/actions/object.js have been loaded
 *              - db/dataStorage.js have been loaded
 */

((window, document) => {
  /**
   * @function fetchObjects
   * @description fetches the objects using API calls
   * @fires readObjectHist()
   * @return {Array<Object>}
   */
  const fetchObjects = async () => {
    var smartwatch = localStorage.getItem("currentSmartwatch"); //  getting the currently chosen smartwatch from localStorage
    if (smartwatch === null) {
      //  don't do anything unless a smartwatch is chosen
      console.log("cannot get objects without choosing a child first");
      return Promise.reject("setAChild"); //  exit the function and reject promise
    } else {
      try {
        const objects = await readObjectHist(); //  get objects associated with the current watch //  from db/actions/object.js
        return Promise.resolve(objects); //  exit the function and resolve promise
      } catch (err) {
        //  in case of db error
        return Promise.reject(err); //  reject promise and exit
      }
    }
  };

  /**
   * @function prepareData
   * @description reformats db data and stores it in the temp storage object
   * @fires fetchObjects()
   * @fires "newObject"
   * @fires "objectUpdated"
   */
  const prepareData = async () => {
    try {
      let objects = await fetchObjects(); //  getting objects
      var objectsObj = []; //  for formatting data
      var imagesObject = [];
      objects.rows.forEach((item, index) => {
        //  formatting data to suite table
        objectsObj.push({
          date: new Date(item.key[1]),
          img: `<a href="#" id=${index} class="imageLink">link</a>`,
          location: item.key[0]
        });
        imagesObject.push(item.value);
      });
      dataStorage.objectHist = objectsObj; //  storing formatted data in a dataStorage //  from db/dataStorage.js
      dataStorage.images = imagesObject;
      $("#content").trigger(events.objectsUpdated);
    } catch (err) {
      console.error(err);
    }
  };

  //  fetching data once
  prepareData();
  //  fetching data again every 5 seconds
  setInterval(async () => {
    prepareData();
  }, frequencies.objectUpdate);
})(this, this.document);
