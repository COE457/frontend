((window, document) => {
    $("#addChild").click(e => {
        $("#modal").load("addChild.html #form", () => {
            showModal();
            $("#leftButton").click(e => {});
            $("#rightButton").click(e => {
                e.preventDefault();
                hideModal();
            });
        });
    });

    $("#removeChild").click(e => {
        
    });
})(this.window, this.document);