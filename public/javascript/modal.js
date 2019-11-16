const showModal = () => {
  $("#modalContainer").fadeIn("slow");
};

const hideModal = () => {
  $("#modalContainer").fadeOut("slow");
};

$("body").keydown(e => {
  if (e.keyCode === 27) {
    hideModal();
  }
});
