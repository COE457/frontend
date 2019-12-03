/**
 * @file db/services/smartwatch.js
 *
 * @description provides a service layer for communicating with the smartwatch route
 */

const smartwatchURL = `${dbParams.url}/${dbParams.route}/smartwatch`;

/**
 * @function createSmartwatchSvc
 * @param {Object} data
 * @fires POST-smartwatch
 * @description sends a post request to the database to add a new smartwatch based on "data"
 */
const createSmartwatchSvc = data => {
  return $.ajax({
    url: `${smartwatchURL}/create`,
    dataType: "json",
    type: "post",
    contentType: "application/json",
    data: data,
    processData: false
  });
};

/**
 * @function readSmartwatchSvc
 * @param {Object} data
 * @fires GET-smartwatch
 * @description sends a get request to the database to list smartwatches based on "data"
 */
const readSmartwatchSvc = data => {
  return $.ajax({
    url: `${smartwatchURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: data,
    processData: false
  });
};

/**
 * @function destroySmartwatchSvc
 * @param {Object} data
 * @fires DELETE-smartwatch
 * @description sends a get request to the database to list smartwatches based on "data"
 */
const destroySmartwatchSvc = data => {
  return $.ajax({
    url: `${smartwatchURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};
