/**
 * @file db/actions/object.js
 *
 * @description provides an action layer for communicating with the object route
 */
  
  /**
   * @function destroyObjectHist
   * @param {Object} data
   * @fires destroyObjectHistSvc
   * @description uses destroyObjectHistSvc() to send new object data to the database
   */
  const destroyObjectHist = async (data) => {
    try {
      const object = await destroyObjectHistSvc(data);
      return object;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readObjectHist
   * @param {Object} data
   * @fires readObjectHistSvc
   * @description uses readObjectHistSvc() to send new object data to the database
   */
  const readObjectHist = async (data) => {
      try {
        const object = await readObjectHistSvc(data);
        return object;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };