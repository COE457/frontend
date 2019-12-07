/**
 * @file interface/navigation.js
 *
 * @overview
 * This script is used to add functionality to the navigation menu in index.html
 * Purposes: - to make the different items in the menu usable
 * 			     - to alter index.html based on menu selections
 *           - determining refresh behaviour
 * Assumptions: - utils/events.js has loaded
 *              - interface/modal.js has loaded
 */

((window, document) => {
  //  wrapping the script in a function to avoid global variables
  $(".menuLink:not(#logout)").on(`click ${events.refreshed}`, e => { //  if any menu link except for "logout" has been pressed or on "refreshed" event
    showLoading(); //  show loading screen. //  from interface/modal.js
    $("#pageTitle")
      .hide() //  hide title to make transformation look smoother
      .html(e.target.id.replace(/^\w/, c => c.toUpperCase())) //  replace the title with the clicked link's id, first letter capitalized
      .fadeIn("500"); //  show title again

    $("#content")
      .hide() //  hide content to make animation more obvious 
      .load(e.target.id + ".html" + " #contents", () => { //  load contents from a views html files (in /html/components/views)
        //  set latestPage 
        localStorage.setItem("latestPage", e.target.id);
        $("#content").trigger(events.viewReady); //  trigger viewReady event. This event says that any functions that need the view to be ready could be safely executed
      })
      .fadeIn("100"); //  show contents again
  });

  $("#logout").click(e => { //  if logout link is clicked
    localStorage.clear(); //  clear localStorage (token and userID will no longer be there. Thus, the session will no longer be authenticated)
    window.location.href = "/login"; //  redirect to login page 
  })

})(this.window, this.document); //  calling the function
