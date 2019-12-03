/**
 * @file updates/updateChildList.js
 * 
 * @overview 
 * fetches all the children that have "userID" set as their parent and puts them in a droplist
 * 
 * Assumptions: - db/actions/child.js have been loaded 
 *              - db/dataStorage.js have been loaded
 *              - JQuery have been loaded
 *              - util/events.js have been loaded
 *              - util/JQueryExtend.js have been loaded
 */

((window, document) => {
  let parent = localStorage.getItem("userID"); //  getting parent ID from localStorage
  $("#currentChild").runThenOn(events.childListUpdated, async (e) => { //  run callback then set as event listener callback. //  from util/JQueryExtend.js
    try {
      const childList = await readChild({ Parent: parent }); //  getting the list from db. //  from db/actions/child.js
      let list = childList.docs;
      $("#currentChild").empty().append(`<option value="null"> - </option>`);
      list.forEach(element => { //  placing children in a droplist
        $("#currentChild").append( //  change the droplist
          `<option value=${element.name}> ${element.name} </option>`
        );
      });
      dataStorage.childList = list; //  saving list in a local object to avoid extra API calls 
    } catch (err) {
      console.error(err.responseText);
      alert("Failed to get child list. Interface might not function correctly");
    }
  })
})(this.window, this.document);
