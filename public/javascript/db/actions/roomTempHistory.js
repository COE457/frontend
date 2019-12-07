/**
 * @file db/actions/roomTemperatureHist.js
 *
 * @description provides an action layer for communicating with the location route
 */
  
  /**
   * @function destroyTemperatureHist
   * @param {Object} data
   * @fires destroyTemperatureHistSvc
   * @description uses destroyTemperatureHistSvc() to send new location data to the database
   */
  const destroyTemperatureHist = async (data) => {
    try {
      const location = await destroyTemperatureHistSvc(data);
      return location;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readTemperatureHist
   * @param {Object} data
   * @fires readTemperatureHistSvc
   * @description uses readTemperatureHistSvc() to send new location data to the database
   */
  const readTemperatureHist = async (data) => {
      try {
        const location = await readTemperatureHistSvc(data);
        return location;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };