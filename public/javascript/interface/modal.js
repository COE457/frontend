/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const showModal = (contents, height, callback, callBefore) => {
  $("#modal")
    .height(height)
    .load(contents, () => {
      if(callBefore) callBefore(); //  to be called before the modal is shown
    })
  $("#modalContainer").fadeIn("slow", () => {
    if (callback) callback();
  });
};

const hideModal = () => {
  $("#modal")
    .empty()
    .height("0");
  $("#modalContainer").fadeOut("slow");
};

const showLoading = () => {
  $("#modalContainer").show();
  $("#loading").show();
};

const hideLoading = (cont = true) => {
  $("#loading").hide();
  if (cont) {
    $("#modalContainer").hide();
  }
};

$("body").keydown(e => {
  if (e.keyCode === 27) {
    hideModal();
  }
});
