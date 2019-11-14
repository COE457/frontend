((window, document) => {
    $.ajax({
		url: 'http://localhost:3001/API/child/read',
		type: 'get',
		contentType: 'application/json',
		data: {
			"Parent": localStorage.getItem("userID")
		},
		success: function( data, textStatus, jQxhr ){
            data.docs.forEach(element => {
                $("#currentChild").append(
                    `<option value=${element.name}> ${element.name} </option>`
                )
            });
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log(errorThrown);
			window.location.href = "/";
		}
	});

    $("#currentChild").change(() => {
        localStorage.setItem("currentChild", $("#currentChild").val())
        $.ajax({
            url: 'http://localhost:3001/API/smartwatch/read',
            type: 'get',
            contentType: 'application/json',
            data: {
                "Child": localStorage.getItem(localStorage.getItem("currentChild"))
            },
            success: function( data, textStatus, jQxhr ){
                data.docs.forEach(element => {
                    localStorage.setItem("currentSmartwatch", data.docs[0]._id);
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log(errorThrown);
            }
        });
    })
})(this.window, this.document);