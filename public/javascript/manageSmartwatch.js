((window, document) => {
  $("#addChild").click(e => {
    $("#modal").load("addChild.html #form", () => {
      $("#modal").height("30%");
      showModal();
      $("#leftButton").click(e => {
        $.ajax({
          url: "http://localhost:3001/API/child/create",
          dataType: "json",
          type: "post",
          contentType: "application/json",
          data: JSON.stringify({
            name: $("#childName").val(),
            Parent: localStorage.getItem("userID")
          }),
          processData: false,
          success: function(data, textStatus, jQxhr) {
            console.log("Child added successfully, adding smartwatch...");
            console.log(data);
            $.ajax({
              url: "http://localhost:3001/API/smartwatch/create",
              dataType: "json",
              type: "post",
              contentType: "application/json",
              data: JSON.stringify({
                serialNumber: $("#smartWatchSN").val(),
                Child: data.id
              }),
              success: function(data, textStatus, jQxhr) {
                console.log("Smartwatch added successfully. Refreshing...");
                console.log(data);
                window.location.href = "/";
              },
              error: function(jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });
          },
          error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
      });
      $("#rightButton").click(e => {
        e.preventDefault();
        hideModal();
      });
    });
  });

  $("#removeChild").click(e => {
    $("#modal").load("removeChild.html #form", () => {
      $("#modal").height("25%");
      $("#childDeletion").html(
        `<b>${localStorage.getItem("currentChild")}</b>`
      );
      showModal();

      $("#leftButton").click(e => {
        $.ajax({
          url: "http://localhost:3001/API/child/destroy",
          dataType: "json",
          type: "delete",
          contentType: "application/json",
          data: JSON.stringify({
            name: localStorage.getItem("currentChild")
          }),
          success: function(data, textStatus, jQxhr) {
            console.log("Child deleted successfully. Refreshing");
            console.log(data);
            window.location.href = "/";
          },
          error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
      });

      $("#rightButton").click(e => {
        e.preventDefault();
        hideModal();
      });
    });
  });
})(this.window, this.document);
