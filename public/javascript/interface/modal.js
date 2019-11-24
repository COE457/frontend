const showModal = (contents, height) => {
  $("#modal")
    .load(contents)
    .height(height);
  $("#modalContainer").fadeIn("slow");
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
