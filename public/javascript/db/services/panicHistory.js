/**
 * @file db/services/panic.js
 *
 * @description provides a service layer for communicating with the panic route
 */

const panicHistURL = `${dbParams.url}/${dbParams.route}/panicHistory`;

/**
 * @function readPanicHistSvc
 * @param {Object} data
 * @fires GET-panicHistory
 * @description sends a get request to the database to list panics based on "data"
 */
const readPanicHistSvc = data => {
  return $.ajax({
    url: `${panicHistURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: $.param(data),
    processData: false
  });
};

/**
 * @function destroyPanicHistSvc
 * @param {Object} data
 * @fires DELETE-panicHistory
 * @description sends a get request to the database to list panics based on "data"
 */
const destroyPanicHistSvc = data => {
  return $.ajax({
    url: `${panicHistURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: data,
    processData: false
  });
};
