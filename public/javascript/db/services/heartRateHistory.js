/**
 * @file db/services/heartRateHistory.js
 *
 * @description provides a service layer for communicating with the heartRate route
 */

const heartRateHistURL = `${dbParams.url}/${dbParams.route}/heartRateHistory`;

/**
 * @function readHeartRateHistSvc
 * @param {Object} data
 * @fires GET-heartRateHistory
 * @description sends a get request to the database to list heartRate readings based on "data"
 */
const readHeartRateHistSvc = data => {
  return $.ajax({
    url: `${heartRateHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyHeartRateHistSvc
 * @param {Object} data
 * @fires DELETE-heartRateHistory
 * @description sends a get request to the database to list heartRate readings based on "data"
 */
const destroyHeartRateHistSvc = data => {
  return $.ajax({
    url: `${heartRateHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};