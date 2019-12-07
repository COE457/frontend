/**
 * @file db/services/temperatureHistory.js
 *
 * @description provides a service layer for communicating with the temperature route
 */

const temperatureHistURL = `${dbParams.url}/${dbParams.route}/roomTempHistory`;

/**
 * @function readTemperatureHistSvc
 * @param {Object} data
 * @fires GET-temperatureHistory
 * @description sends a get request to the database to list temperature readings based on "data"
 */
const readTemperatureHistSvc = data => {
  return $.ajax({
    url: `${temperatureHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyTemperatureHistSvc
 * @param {Object} data
 * @fires DELETE-temperatureHistory
 * @description sends a get request to the database to list temperature readings based on "data"
 */
const destroyTemperatureHistSvc = data => {
  return $.ajax({
    url: `${temperatureHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};