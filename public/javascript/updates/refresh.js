(async (window, document) => {
  showLoading();
  try {    
    let page = localStorage.getItem("latestPage");
    let load = page === null ? ".menuLink#home" : `.menuLink#${page}`;
    $(load).trigger(events.refreshed); //  triggers an event that loads either home or latestPage
  } catch (err) {
    console.log(err);
  }
})(this, this.document);
