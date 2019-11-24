/**
 * @file db/actions/child.js
 *
 * @description provides an action layer for communicating with the child route
 */

/**
 * @function createChild
 * @param {Object} data
 * @fires createChildSvc
 * @description uses createChildSvc() to send new child data to the database
 */
const createChild = async data => {
  try {
    const child = await createChildSvc(data);
    return child;
  } catch (err) {
    console.log(err);
  }
};

/**
 * @function destroyChild
 * @param {Object} data
 * @fires destroyChildSvc
 * @description uses destroyChildSvc() to send new child data to the database
 */
const destroyChild = async data => {
  try {
    const child = await destroyChildSvc(data);
    return child;
  } catch (err) {
    console.log(err);
  }
};

/**
 * @function readChild
 * @param {Object} data
 * @fires readChildSvc
 * @description uses readChildSvc() to send new child data to the database
 */
const readChild = async data => {
    try {
      const child = await readChildSvc(data);
      return child;
    } catch (err) {
      console.log(err);
    }
  };