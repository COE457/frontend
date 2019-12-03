/**
 * @file db/actions/smartwatch.js
 *
 * @description provides an action layer for communicating with the smartwatch route
 */

/**
 * @function createSmartwatch
 * @param {Object} data
 * @fires createSmartwatchSvc
 * @description uses createSmartwatchSvc() to send new smartwatch data to the database
 */
const createSmartwatch = async (data) => {
    try {
      const smartwatch = await createSmartwatchSvc(data);
      return smartwatch;
    } catch (err) {
      console.error(err.responseText);
throw(err.responseJSON)
    }
  };
  
  /**
   * @function destroySmartwatch
   * @param {Object} data
   * @fires destroySmartwatchSvc
   * @description uses destroySmartwatchSvc() to send new smartwatch data to the database
   */
  const destroySmartwatch = async (data) => {
    try {
      const smartwatch = await destroySmartwatchSvc(data);
      return smartwatch;
    } catch (err) {
      console.error(err.responseText);
throw(err.responseJSON)
    }
  };
  
  /**
   * @function readSmartwatch
   * @param {Object} data
   * @fires readSmartwatchSvc
   * @description uses readSmartwatchSvc() to send new smartwatch data to the database
   */
  const readSmartwatch = async (data) => {
      try {
        const smartwatch = await readSmartwatchSvc(data);
        return smartwatch;
      } catch (err) {
        console.error(err.responseText);
throw(err.responseJSON)
      }
    };