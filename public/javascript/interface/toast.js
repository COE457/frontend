const newToast = contents => {
  let currentNotifications = Number($("#badge").html());
  $("#badge").html(currentNotifications + 1);
  let newToast = $("<div>", { class: "toast" }).html(`<p>${contents}</p>`);
  $("#toastContainer").append(newToast);
  newToast.animate({ right: "+=100%" }, 350, "linear").click(e => {
    currentNotifications = Number($("#badge").html());
    $("#badge").html(currentNotifications - 1);
    newToast.remove();
  });
  setTimeout(() => {
    newToast.animate({ right: "-=100%" }, 350, "linear", () => {
      newToast.hide();
    });
  }, 5000);
};

$("#notification").click(e => {
  let display = $(".toast").css("display");

  setTimeout(() => {
    if (display == "block") {
      $(".toast").animate({ right: "-=100%" }, 350, "linear", () => {
        $(".toast").hide();
      });
    } else {
      $(".toast")
        .show()
        .animate({ right: "+=100%" }, 350, "linear");
    }
  }, 100);
});
