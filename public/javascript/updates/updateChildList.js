/**
 * @file updates/updateChildList.js
 * 
 * @overview 
 * fetches all the children that have "userID" set as their parent and puts them in a droplist
 * 
 * Assumptions: - db/actions/child.js have been loaded 
 *              - JQuery have been loaded
 */

(async (window, document) => {
  let parent = localStorage.getItem("userID"); //  getting parent ID from localStorage
  try {
    const childList = await readChild({ Parent: parent }); //  getting the list from db
    let list = childList.docs;
    list.forEach(element => { //  placing children in a droplist
      $("#currentChild").append(
        `<option value=${element.name}> ${element.name} </option>`
      );
    });
  } catch (err) {
    console.log(err);
    alert("Failed to get child list");
  }
})(this.window, this.document);
