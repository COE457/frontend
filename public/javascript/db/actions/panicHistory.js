/**
 * @file db/actions/panic.js
 *
 * @description provides an action layer for communicating with the panic route
 */
  
  /**
   * @function destroyPanicHist
   * @param {Object} data
   * @fires destroyPanicHistSvc
   * @description uses destroyPanicHistSvc() to send new panic data to the database
   */
  const destroyPanicHist = async (data) => {
    try {
      const panic = await destroyPanicHistSvc(data);
      return panic;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readPanicHist
   * @param {Object} data
   * @fires readPanicHistSvc
   * @description uses readPanicHistSvc() to send new panic data to the database
   */
  const readPanicHist = async (data) => {
      try {
        const panic = await readPanicHistSvc(data);
        return panic;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };