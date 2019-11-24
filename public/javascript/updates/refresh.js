(async (window, document) => {
  showLoading();
  try {
    let parent = localStorage.getItem("userID");
    const children = await readChild({ Parent: parent });
    children.docs.forEach(element => {
      $("#currentChild").append(
        `<option value=${element.name}> ${element.name} </option>`
      );
    });
    let page = localStorage.getItem("latestPage");
    let load = page === null ? ".menuLink#home" : `.menuLink#${page}`;
    $(load).trigger("refreshed"); //  triggers an event that loads either home or latestPage
  } catch (err) {
    console.log(err);
  }
})(this, this.document);
