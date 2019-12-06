/**
 * @file db/actions/equipmentHistory.js
 *
 * @description provides an action layer for communicating with the equipment route
 */
  
  /**
   * @function destroyEquipmentHist
   * @param {Object} data
   * @fires destroyEquipmentHistSvc
   * @description uses destroyEquipmentHistSvc() to send new equipment data to the database
   */
  const destroyEquipmentHist = async (data) => {
    try {
      const equipment = await destroyEquipmentHistSvc(data);
      return equipment;
    } catch (err) {
      console.error(err.responseText);
      throw(err.responseJSON)
    }
  };
  
  /**
   * @function readEquipmentHist
   * @param {Object} data
   * @fires readEquipmentHistSvc
   * @description uses readEquipmentHistSvc() to send new equipment data to the database
   */
  const readEquipmentHist = async (data) => {
      try {
        const equipment = await readEquipmentHistSvc(data);
        return equipment;
      } catch (err) {
        console.error(err.responseText);
        throw(err.responseJSON)
      }
    };