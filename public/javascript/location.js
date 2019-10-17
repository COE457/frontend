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
const updateLocation = () => {
  const locationTableHead = // the table head
    "<thead>\
        <tr>\
            <th>Location</th>\
            <th>Date</th>\
            <th>Currently There</th>\
        </tr>\
    </thead>";
  $("#locationTable") //  selecting the table DOM element
    .empty() //  clearing the table DOM element
    .append(locationTableHead + genLocationTableBody(fetchLocations())); //  filling the table DOM element
};

/**
 * @function fetchLocations
 * @description fetches the locations using API calls
 * @fires SOME_API_CALL
 * @return {Array<Object>}
 */
const fetchLocations = () => {
  /**
   * @todo use API calls to fetch the locations and replace the dummy return with them
   */
  return [
    //  dummy return
    {
      location: "bedroom",
      date: "12/09/2019 10:30:15",
      currentlyThere: true
    },
    {
      location: "kitchen",
      date: "12/09/2019 10:25:33",
      currentlyThere: false
    },
    {
      location: "bathroom",
      date: "12/09/2019 10:20:01",
      currentlyThere: false
    }
  ];
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
    tmp += "<td>" + element["date"] + "</td>";
    tmp += "<td>" + (element["currentlyThere"] ? "&#x2714;" : "") + "</td>"; //  using tick mark for true and nothing for false
    tmp += "</tr>";
  });
  tmp += "</tbody>";

  return tmp;
}
