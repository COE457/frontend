/**
 * @file db/services/object.js
 *
 * @description provides a service layer for communicating with the object route
 */

const objectHistURL = `${dbParams.url}/${dbParams.route}/objectHistory`;

/**
 * @function readObjectHistSvc
 * @param {Object} data
 * @fires GET-objectHistory
 * @description sends a get request to the database to list objects based on "data"
 */
const readObjectHistSvc = data => {
  return $.ajax({
    url: `${objectHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyObjectHistSvc
 * @param {Object} data
 * @fires DELETE-objectHistory
 * @description sends a get request to the database to list objects based on "data"
 */
const destroyObjectHistSvc = data => {
  return $.ajax({
    url: `${objectHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};
