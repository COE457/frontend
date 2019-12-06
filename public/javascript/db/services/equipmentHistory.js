/**
 * @file db/services/equipmentHistory.js
 *
 * @description provides a service layer for communicating with the equipment route
 */

const equipmentHistURL = `${dbParams.url}/${dbParams.route}/equipmentHistory`;

/**
 * @function readEquipmentHistSvc
 * @param {Object} data
 * @fires GET-equipmentHistory
 * @description sends a get request to the database to list equipment readings based on "data"s
 */
const readEquipmentHistSvc = data => {
  return $.ajax({
    url: `${equipmentHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyEquipmentHistSvc
 * @param {Object} data
 * @fires DELETE-equipmentHistory
 * @description sends a get request to the database to list equipment readings based on "data"
 */
const destroyEquipmentHistSvc = data => {
  return $.ajax({
    url: `${equipmentHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};