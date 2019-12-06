(async (window, document) => {
  showLoading();
  try {    
    let page = localStorage.getItem("latestPage");
    let load = page === null ? ".menuLink#home" : `.menuLink#${page}`;
    let child = localStorage.getItem("currentChild");
    $(load).trigger(events.refreshed); //  triggers an event that loads either home or latestPage
  } catch (err) {
    console.error(err.responseText);
  }
})(this, this.document);
