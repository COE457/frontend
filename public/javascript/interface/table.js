const genTable = (head, contents) => {
  const genTableHead = head => {
    let header = "<thead><tr>";
    head.forEach(item => {
      header += `<th>${item}</th>`;
    });
    header += "</tr></thead>";
    return header;
  };

  return genTableHead(head);
};
