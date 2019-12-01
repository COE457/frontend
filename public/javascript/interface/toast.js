let timeOuts = [];

const showToast = toast => {
  toast.css({ right: "-100%" });
  toast
    .show()
    .animate({ right: "+=100%" }, 350, "linear");
}

const hideToast = toast => {
  toast.animate({ right: "-=100%" }, 350, "linear", () => {
    toast.hide();
  });
}

const deleteToast = toast => {
  currentNotifications = Number($("#badge").html());
  $("#badge").html(currentNotifications - 1);
  toast.animate({ right: "+=100%" }, 150, "linear", () => {
    toast.remove();
  });
}

const newToast = contents => {
  let currentNotifications = Number($("#badge").html());
  $("#badge").html(currentNotifications + 1);
  let newToast = $("<div>", { class: "toast" }).html(`<p>${contents}</p>`);
  $("#toastBody").prepend(newToast);
  newToast.on(`click ${events.clearNotifications}`, e => {
    deleteToast(newToast);
  });
  showToast(newToast);
  timeOuts.push(
    setTimeout(() => {
      hideToast(newToast);
    }, 3000)
  );
};

$("#notification").click(e => {
  let display = $(".toast").css("display");

  timeOuts.forEach(item => {
    clearTimeout(item);
  });


  if (display == "block") {
    hideToast($(".toast"));
  } else {
    showToast($(".toast"));
  }
});

$("#clearNot").click(e => {
  $(".toast").trigger(events.clearNotifications);
  hideToast($(".toast"));
});
