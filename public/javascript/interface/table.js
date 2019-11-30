const genTable = (contents) => {
  const genTableHead = head => {
    let header = "<thead><tr>";
    head.forEach(item => {
      header += `<th>${item}</th>`;
    });
    header += "</tr></thead>";
    return header;
  };

  const genTableBody = (head, body) => {
    let tmp = "<tbody>";
    body.forEach(element => {
      //  iterating over the data array to generate a row for each item
      //sorting the data in html table tags
      tmp += "<tr>";
      head.forEach(item => {
        tmp += `<td>${element[item]}</td>`
      });
      // tmp += "<td>" + new Date(element["date"]) + "</td>";
      // tmp += "<td>" + (element["currentlyThere"] ? "&#x2714;" : "") + "</td>"; //  using tick mark for true and nothing for false
      tmp += "</tr>";
    });
    tmp += "</tbody>";

    return tmp;
  }

  let head = Object.keys(contents[0]);
  return genTableHead(head) + genTableBody(head, contents);
};
