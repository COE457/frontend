/**
 * @file db/services/location.js
 *
 * @description provides a service layer for communicating with the location route
 */

const childURL = `${dbParams.url}/${dbParams.route}/locationHistory`;

/**
 * @function createChildSvc
 * @param {Object} data
 * @fires POST-location
 * @description sends a post request to the database to add a new location based on "data"
 */
const createChildSvc = data => {
  return $.ajax({
    url: `${childURL}/create`,
    dataType: "json",
    type: "post",
    contentType: "application/json",
    data: data,
    processData: false
  });
};

/**
 * @function readChildSvc
 * @param {Object} data
 * @fires GET-location
 * @description sends a get request to the database to list locations based on "data"
 */
const readChildSvc = data => {
  return $.ajax({
    url: `${childURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: data,
    processData: false
  });
};

/**
 * @function destroyChildSvc
 * @param {Object} data
 * @fires DELETE-location
 * @description sends a get request to the database to list locations based on "data"
 */
const destroyChildSvc = data => {
  return $.ajax({
    url: `${childURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};
