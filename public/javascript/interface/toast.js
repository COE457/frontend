/**
 * @file interface/toast.js
 * 
 * @overview includes functions for controlling toasts
 * 
 * Assumptions: - JQuery have loaded
 *              - util/events.js have loaded
 */

let timeOuts = []; //  for storing timers

/**
 * @function showToast
 * @param {Object} toast
 * @description plays an animation that shows a hidden toast then slides it right to left 
 */
const showToast = toast => {
  toast.css({ right: "-100%" }); //  to avoid conflicts when animating multiple toasts
  toast
    .show()
    .animate({ right: "+=100%" }, 350, "linear");
}

/**
 * @function hideToast
 * @param {Object} toast
 * @description plays an animation that slides a toast left to right then hides it
 */
const hideToast = toast => {
  toast.animate({ right: "-=100%" }, 350, "linear", () => {
    toast.hide();
  });
}

/**
 * @function deleteToast
 * @param {Object} toast
 * @description plays an animation that slides a toast right to left then deletes it
 */
const deleteToast = toast => {
  currentNotifications = Number($("#badge").html()); //  getting number of available notifications (toasts)
  $("#badge").html(currentNotifications - 1); //  decreasing the number of notifications (toasts) by 1
  toast.animate({ right: "+=100%" }, 150, "linear", () => {
    toast.remove(); //  deleting the toast
  });
}

/**
 * @function newToast
 * @param {String} contents
 * @description creates a new toast that has "contents" in its body and attaches appropriate event listeners to it
 */
const newToast = contents => {
  let currentNotifications = Number($("#badge").html()); //  getting number of available notifications (toasts)
  $("#badge").html(currentNotifications + 1); //  incrementing the number of notifications (toasts) by 1
  let newToast = $("<div>", { class: "toast" }).html(`<p>${contents}</p>`); //  generating a new toast
  $("#toastBody").prepend(newToast); //  placing the new toast on top of the old toasts 
  newToast.on(`click ${events.clearNotifications}`, e => { //  in case of clicking the toast or capturing "clearNotifications", delete toast
    deleteToast(newToast);
  });
  showToast(newToast); //  show the toast (animation)
  timeOuts.push( //  add a timer to the timer list
    setTimeout(() => {
      hideToast(newToast); //  when the timer finishes, hide the toast (animation)
    }, 3000)
  );
};

$("#notification").click(e => {
  let display = $(".toast").css("display"); //  display all toasts when the notifications button is pressed

  timeOuts.forEach(item => { //  cancelling all timers to avoid animation conflicts
    clearTimeout(item);
  });


  if (display == "block") { //  if the notification list (toasts) was already open, hide all toasts
    hideToast($(".toast"));
  } else { //  otherwise , show all toasts
    showToast($(".toast"));
  }
});

$("#clearNot").click(e => { //  when the option toast "CLEAR" is clicked, delete all notifications
  $(".toast").trigger(events.clearNotifications); //  this gives the flexibility to add notification clearing to places that don't include opening the notification menu
  hideToast($(".toast")); //  toasts that don't have an event listener for deletion will be hidden here
});
