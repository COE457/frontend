((window, document) => {

    let menuItems = document.getElementsByClassName("pure-menu-link");  // getting all menu links   
    [...menuItems].forEach(element => {  // using menu items(html collection) as array 
        element.addEventListener('click', () => {
            $("#content").load(element.id + ".html" + " #contents", ()=> {
                if(element.id == "status"){
                    t("#thermometerRoom");
                    t("#thermometerBody");
                    h();
                } else if (element.id == "location") {
                    updateLocation();
                }
            });//adding an event listener to each menu link that changes the 
                                                                    //contents of the content div to be (%id%.html)
            $("#pageTitle").html(element.id.replace(/^\w/, c => c.toUpperCase()));  //changing the page title to that id (first letter capitalized)
        });
    })
})(this, this.document);