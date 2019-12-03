/**
 * @file db/actions/location.js
 *
 * @description provides an action layer for communicating with the location route
 */
  
  /**
   * @function destroyLocationHist
   * @param {Object} data
   * @fires destroyLocationHistSvc
   * @description uses destroyLocationHistSvc() to send new location data to the database
   */
  const destroyLocationHist = async (data) => {
    try {
      const location = await destroyLocationHistSvc(data);
      return location;
    } catch (err) {
      console.error(err.responseText);
throw(err.responseJSON)
    }
  };
  
  /**
   * @function readLocationHist
   * @param {Object} data
   * @fires readLocationHistSvc
   * @description uses readLocationHistSvc() to send new location data to the database
   */
  const readLocationHist = async (data) => {
      try {
        const location = await readLocationHistSvc(data);
        return location;
      } catch (err) {
        console.error(err.responseText);
throw(err.responseJSON)
      }
    };