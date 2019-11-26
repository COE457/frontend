/**
 * @file db/actions/location.js
 *
 * @description provides an action layer for communicating with the location route
 */

/**
 * @function createChild
 * @param {Object} data
 * @fires createChildSvc
 * @description uses createChildSvc() to send new location data to the database
 */
const createChild = async (data) => {
    try {
      const location = await createChildSvc(data);
      return location;
    } catch (err) {
      console.log(err);
    }
  };
  
  /**
   * @function destroyChild
   * @param {Object} data
   * @fires destroyChildSvc
   * @description uses destroyChildSvc() to send new location data to the database
   */
  const destroyChild = async (data) => {
    try {
      const location = await destroyChildSvc(data);
      return location;
    } catch (err) {
      console.log(err);
    }
  };
  
  /**
   * @function readChild
   * @param {Object} data
   * @fires readChildSvc
   * @description uses readChildSvc() to send new location data to the database
   */
  const readChild = async (data) => {
      try {
        const location = await readChildSvc(data);
        return location;
      } catch (err) {
        console.log(err);
      }
    };