/**
 * @file location.js
 *
 * @overview
 * This script is used to process locations
 * Purposes: - use API calls to fetch a set of latest locations
 * 			     - generate a table that holds those locations
 */

/**
 * @function updateLocation
 * @description puts together a table that holds latest locations
 * @fires genLocationTableBody()
 * @fires fetchLocations()
 */
const updateLocation = async () => {
  const locationTableHead = // the table head
    "<thead>\
        <tr>\
            <th>Location</th>\
            <th>Date</th>\
            <th>Currently There</th>\
        </tr>\
    </thead>";

  fetchLocations().then(locations => {
    $("#locationTable") //  selecting the table DOM element
      .empty() //  clearing the table DOM element
      .append(locationTableHead + genLocationTableBody(locations.docs)); //  filling the table DOM element
  });
};

/**
 * @function fetchLocations
 * @description fetches the locations using API calls
 * @fires SOME_API_CALL
 * @return {Array<Object>}
 */
const fetchLocations = () => {
  return $.ajax({
    url: "http://localhost:3001/API/locationHistory/read",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: {},
    processData: false
  });
};

/**
 * @function genLocationTableBody
 * @description generates the table body based on data
 * @param {Array<Object>} data
 * @returns {string} the table body in html format
 */
function genLocationTableBody(data) {
  let tmp = "<tbody>";
  data.forEach(element => {
    //  iterating over the data array to generate a row for each item
    //sorting the data in html table tags
    tmp += "<tr>";
    tmp += "<td>" + element["location"] + "</td>";
    tmp += "<td>" + new Date(element["date"]) + "</td>";
    tmp += "<td>" + (element["currentlyThere"] ? "&#x2714;" : "") + "</td>"; //  using tick mark for true and nothing for false
    tmp += "</tr>";
  });
  tmp += "</tbody>";

  return tmp;
}
