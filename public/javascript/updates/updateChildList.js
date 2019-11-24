((window, document) => {
  setInterval(() => {
    try {
      let Parent = localStorage.getItem("userID");
      readChild({
        Parent: Parent
      }).then(childList => {
        let list = childList.docs;
        localStorage.setItem("childList", JSON.stringify(list));
      });
    } catch (err) {}
  }, 10000);
})(this.window, this.document);
