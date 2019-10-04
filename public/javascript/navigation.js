/**
 * @file navigation.js
 *
 * @overview
 * This script is used to add functionality to the navigation menu in index.html
 * Purposes: - to make the different items in the menu usable
 * 			     - to alter index.html based on menu selections
 * Assumptions: - thermometer.js has loaded
 *              - heartRate.js has loaded
 *              - thermometer.js has loaded
 *              - location.js has loaded
 *              - object.js has loaded
 */

((window, document) => {
  //  wrapping the script in a function to avoid global variables
  //DUMMY LOGIN CHECK
  //To be replaced with authentication check when the API is ready
  if (localStorage.length === 0 /*@todo replace with a valid condition*/) {
    // if the user is NOT logged in
    window.location.href = "/login"; // redirect to the login page
  } else {
    // if a valid
    let menuItems = document.getElementsByClassName("menuLink"); //  getting all menu links
    [...menuItems].forEach(element => {
      //using menu items(html collection) as array
      element.addEventListener("click", () => {
        if (element.id == "logout") {
          //if the user selects "Logout"
          localStorage.clear(); //  clear local storage
          document.location.reload(); //  reload the page
        } else {
          console.log(element.id);
          $("#content").load(element.id + ".html" + " #contents", () => {
            //different actions based on selection
            switch (element.id) {
              case "home":
                //@todo add functions and API calls to get actual data
                break;

              case "status":
                /**
                 * @function t() <= thermometer.js
                 * @function h() <= heartRate.js
                 */
                t("#thermometerRoom"); //  load room thermometer data @todo add API call to get actual reading
                t("#thermometerBody"); //  load body thermometer data @todo add API call to get actual reading
                h(); //  load heart rate data @todo add API call to get actual reading
                //@todo add functions and API calls to get actual data
                break;

              case "location":
                /** @function updateLocation() <= location.js */
                updateLocation(); // generate locations table @todo add API call to get actual reading
                break;

              case "objects":
                /** @function updateObjects() <= object.js */
                updateObjects(); // generate objects table @todo add API call to get actual reading
                break;

              case "communication":
                /** @function attachCommunicationFunctions() <= communication.js */
                attachCommunicationFunctions();
                break;

              default:
                break;
            }
          });

          /**
           * adding an event listener to each menu link that changes the
           * contents of the content div to be (%id%.html)
           */
          $("#pageTitle").html(element.id.replace(/^\w/, c => c.toUpperCase())); //changing the page title to that id (first letter capitalized)
        }
      });
    });
  }
})(this, this.document); //  calling the function
