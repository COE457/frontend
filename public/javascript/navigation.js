((window, document) => {

    let menuItems = document.getElementsByClassName("pure-menu-link");
    [...menuItems].forEach(element => {
        element.addEventListener('click', () => {
            $("#content").load(element.id + ".html" + " #contents");
        });
    })
})(this, this.document);