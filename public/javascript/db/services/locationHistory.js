/**
 * @file db/services/location.js
 *
 * @description provides a service layer for communicating with the location route
 */

const locationHistURL = `${dbParams.url}/${dbParams.route}/locationHistory`;

/**
 * @function readLocationHistSvc
 * @param {Object} data
 * @fires GET-locationHistory
 * @description sends a get request to the database to list locations based on "data"
 */
const readLocationHistSvc = data => {
  return $.ajax({
    url: `${locationHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyLocationHistSvc
 * @param {Object} data
 * @fires DELETE-locationHistory
 * @description sends a get request to the database to list locations based on "data"
 */
const destroyLocationHistSvc = data => {
  return $.ajax({
    url: `${locationHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};
