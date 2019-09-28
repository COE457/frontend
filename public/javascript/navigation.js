((window, document) => {

    let menuItems = document.getElementsByClassName("pure-menu-link");
    [...menuItems].forEach(element => {
        element.addEventListener('click', () => {
            $("#content").load(element.id + ".html" + " #contents");
            $("#pageTitle").html(element.id.replace(/^\w/, c => c.toUpperCase()));
        });
    })
})(this, this.document);