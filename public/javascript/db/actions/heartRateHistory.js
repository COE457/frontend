/**
 * @file db/actions/heartRateHistory.js
 *
 * @description provides an action layer for communicating with the heartRate route
 */
  
  /**
   * @function destroyHeartRateHist
   * @param {Object} data
   * @fires destroyHeartRateHistSvc
   * @description uses destroyHeartRateHistSvc() to send new heartRate data to the database
   */
  const destroyHeartRateHist = async (data) => {
    try {
      const heartRate = await destroyHeartRateHistSvc(data);
      return heartRate;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readHeartRateHist
   * @param {Object} data
   * @fires readHeartRateHistSvc
   * @description uses readHeartRateHistSvc() to send new heartRate data to the database
   */
  const readHeartRateHist = async (data) => {
      try {
        const heartRate = await readHeartRateHistSvc(data);
        return heartRate;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };