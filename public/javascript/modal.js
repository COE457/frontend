const showModal = () => {
    $("#modalContainer").fadeIn("slow");
}

const hideModal = () => {
    $("#modalContainer").fadeOut("slow");
}

$("body").keyup(e => {
    if(e.keyCode === 27){
        hideModal();
    }
})