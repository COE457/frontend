((window, document) => {
  $("#content").on("viewReady", () => {
    let page = localStorage.getItem("latestPage");
    switch (page){
      case "location":
        updateLocation();
    }
    hideLoading();
  });
})(this, this.document);
