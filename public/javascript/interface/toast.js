let timeOuts = [];
const newToast = contents => {
  let currentNotifications = Number($("#badge").html());
  $("#badge").html(currentNotifications + 1);
  let newToast = $("<div>", { class: "toast" }).html(`<p>${contents}</p>`);
  $("#toastContainer").append(newToast);
  newToast
    .show()
    .animate({ right: "+=100%" }, 350, "linear")
    .click(e => {
      currentNotifications = Number($("#badge").html());
      $("#badge").html(currentNotifications - 1);
      newToast.animate({ right: "+=100%" }, 350, "linear", () => {
        newToast.remove();
      });
    });
  timeOuts.push(
    setTimeout(() => {
      newToast.animate({ right: "-=100%" }, 350, "linear", () => {
        newToast.hide();
      });
    }, 5000)
  );
};

$("#notification").click(e => {
  let display = $(".toast").css("display");
  timeOuts.forEach(item => {
    clearTimeout(item);
  });
  $(".toast").css({ right: "-100%" });
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

$("#clearNot").click(e => {
  $(".toast").animate({ right: "+=100%" }, 350, "linear", () => {
    $(".toast").hide();
    $(".toast:not(.option)").remove();
    $("#badge").html(0);
    $(".toast").animate({ right: "-=100%" }, 350, "linear", () => {
      $(".toast").hide();
    });
  });
});
