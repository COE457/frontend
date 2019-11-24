/**
 * @file db/services/child.js
 *
 * @description provides a service layer for communicating with the child route
 */

const childURL = `${dbParams.url}/${dbParams.route}/child`;

/**
 * @function createChildSvc
 * @param {Object} data
 * @fires POST-child
 * @description sends a post request to the database to add a new child based on "data"
 */
const createChildSvc = data => {
  return $.ajax({
    url: `${childURL}/create`,
    dataType: "json",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(data),
    processData: false
  });
};

/**
 * @function readChildSvc
 * @param {Object} data
 * @fires GET-child
 * @description sends a get request to the database to list children based on "data"
 */
const readChildSvc = data => {
  return $.ajax({
    url: `${childURL}/read`,
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: JSON.stringify(data),
    processData: false
  });
};

/**
 * @function destroyChildSvc
 * @param {Object} data
 * @fires DELETE-child
 * @description sends a get request to the database to list children based on "data"
 */
const destroyChildSvc = data => {
  return $.ajax({
    url: `${childURL}/destroy`,
    dataType: "json",
    type: "delete",
    contentType: "application/json",
    data: JSON.stringify(data),
    processData: false
  });
};
