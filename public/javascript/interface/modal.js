/**
 * @file interface/modal.js
 * 
 * @overview 
 *    -load functions that could be used to place html into modals
 *    -load functions that control the loading screen
 */

var loading = false; //  flag to determine if anything is loading

/**
 * @function showModal
 * @param {String} contents name of the html file that could be used as a modal body
 * @param {String} height height of the modal
 * @param {function} callback function to be called after the modal is shown
 * @param {function} callBefore function to be called after the modal is loaded but before it is shown
 */
const showModal = (contents, height, callback, callBefore) => {
  $("#modal")
    .height(height) //  setting the height of the modal
    .load(contents, () => { //  loading the contents of the modal
      if(callBefore) callBefore(); //  to be called before the modal is shown if provided 
    })
  $("#modalContainer").fadeIn("slow", () => { //  showing modalContainer which shows its children as well
    if (callback) callback(); //  to be called after the modal is shown if provided 
  });
};

/**
 * @function hideModal
 */
const hideModal = () => {
  $("#modal")
    .empty() //  empty the contents of the modal (remove children)
    .height("0"); //  set height to 0
  $("#modalContainer").fadeOut("slow"); //  hide modal container which hides its children as well
};

/**
 * @function showLoading
 */
const showLoading = () => {
  $("#modalContainer").show(); //  show modal container
  $("#loading").show(); //  show loading icon 
  loading = true; //  something is loading 
};

/**
 * @function hideLoading
 * @param {boolean} cont to determine if the modal container should be hidden along with the loading screen
 */
const hideLoading = (cont = true) => {
  $("#loading").hide(); //  hide loading icon
  if (cont) { //  decide if the container should be hidden or not
    $("#modalContainer").hide(); //  nothing is loading anymore
  }
  loading = false;
};

$("body").keydown(e => {
  if (e.keyCode === 27 && !loading) { //  if esc is pressed AND nothing is loading, hide modal
    hideModal();
  }
});
