/**
 * @file db/actions/lightSensor.js
 *
 * @description provides an action layer for communicating with the lightSensor route
 */
  
  /**
   * @function destroyLightSensorHist
   * @param {Object} data
   * @fires destroyLightSensorHistSvc
   * @description uses destroyLightSensorHistSvc() to send new lightSensor data to the database
   */
  const destroyLightSensorHist = async (data) => {
    try {
      const lightSensor = await destroyLightSensorHistSvc(data);
      return lightSensor;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readLightSensorHist
   * @param {Object} data
   * @fires readLightSensorHistSvc
   * @description uses readLightSensorHistSvc() to send new lightSensor data to the database
   */
  const readLightSensorHist = async (data) => {
      try {
        const lightSensor = await readLightSensorHistSvc(data);
        return lightSensor;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };