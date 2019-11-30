/**
 * @file interface/navigation.js
 *
 * @overview
 * This script is used to add functionality to the navigation menu in index.html
 * Purposes: - to make the different items in the menu usable
 * 			     - to alter index.html based on menu selections
 *           - determining refresh behaviour
 * Assumptions: - utils/events.js has loaded
 *              - thermometer.js has loaded
 *              - heartRate.js has loaded
 *              - thermometer.js has loaded
 *              - location.js has loaded
 *              - object.js has loaded
 */

((window, document) => {
  //  wrapping the script in a function to avoid global variables
  $(".menuLink").on(`click ${events.refreshed}`, e => {
    showLoading();
    $("#pageTitle")
      .hide()
      .html(e.target.id.replace(/^\w/, c => c.toUpperCase()))
      .fadeIn("500"); //changing the page title to that id (first letter capitalized)

    $("#content")
      .hide()
      .load(e.target.id + ".html" + " #contents", () => {
        //  set latestPage 
        localStorage.setItem("latestPage", e.target.id);
        $("#content").trigger(events.viewReady);
      })
      .fadeIn("100");
  });

})(this.window, this.document); //  calling the function
