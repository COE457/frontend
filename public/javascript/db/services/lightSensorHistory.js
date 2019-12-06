/**
 * @file db/services/lightSensorHistory.js
 *
 * @description provides a service layer for communicating with the lightSensor route
 */

const lightSensorHistURL = `${dbParams.url}/${dbParams.route}/lightSensorHistory`;

/**
 * @function readLightSensorHistSvc
 * @param {Object} data
 * @fires GET-lightSensorHistory
 * @description sends a get request to the database to list lightSensor readings based on "data"
 */
const readLightSensorHistSvc = data => {
  return $.ajax({
    url: `${lightSensorHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyLightSensorHistSvc
 * @param {Object} data
 * @fires DELETE-lightSensorHistory
 * @description sends a get request to the database to list lightSensor readings based on "data"
 */
const destroyLightSensorHistSvc = data => {
  return $.ajax({
    url: `${lightSensorHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};