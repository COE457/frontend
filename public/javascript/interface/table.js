/**
 * @file interface/table.js
 *
 * @overview used to generate an html table (without the <table> tag)  from an array of Objects
 */

/**
 * @function genTable
 * @param {Array<Object>} contents
 */
const genTable = contents => {
  /**
   * @function genTableHead
   * @param {Array<*>} head
   * @description inner function that could be used to generate a table head (first row) from an array
   */
  const genTableHead = head => {
    let header = "<thead><tr>"; //  opening tags
    head.forEach(item => {
      header += `<th>${item}</th>`; //  adding each item as a <th>
    });
    header += "</tr></thead>"; //  closing tags
    return header; //  return the generated header
  };

  /**
   * @function genTableBody
   * @param {Array<*>} head
   * @param {Array<Object>} body
   * @description inner function that could be used to generate the body of a table (2nd row onward) based on its head
   */
  const genTableBody = (head, body) => {
    let tmp = "<tbody>"; //  body opening tag
    body.forEach((element, index) => { //  iterate through every object while counting the indices 
      //  iterating over the data array to generate a row for each item
      //sorting the data in html table tags
      tmp += `<tr ${index % 2 == 0 ? "" : "style=background-color:#ebeef2"}>`; //  if index is odd, color it differently
      head.forEach(item => { //  iterate through the head and use the elements as keys 
        tmp += `<td>${element[item]}</td>`; //  add a cell for each key of the element 
      });
      tmp += "</tr>"; //  row closing tag
    });
    tmp += "</tbody>"; //  body closing tag

    return tmp; //  return the generated body 
  };

  /* USING THE INNER FUNCTIONS  */
  let head = Object.keys(contents[0]); //  the keys if the 0th object could be used as a head since it is constant throughout elements
  return genTableHead(head) + genTableBody(head, contents); //  combine the results of generating a body and a head and return them
};
