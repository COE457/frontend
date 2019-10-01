let objectsTableHead = "<thead>\
                            <tr>\
                                <th>Object</th>\
                                <th>Date</th>\
                                <th>Distance</th>\
                            </tr>\
                        </thead>";

const updateObjects = (window, document) => {
    $("#objectsTable")
        .empty()
        .append(objectsTableHead + genObjectsTableBody(fetchObjects()));
}

const fetchObjects = () => {
    return([
        {
            "object": "window",
            "date": "12/09/2019 10:30:15",
            "distance": 5
        },
        {
            "object": "knife",
            "date": "12/09/2019 10:26:15",
            "distance": 1
        },
        {
            "object": "oven",
            "date": "12/09/2019 10:26:10",
            "distance": 2
        }
    ]);
}

function genObjectsTableBody(data){
    let tmp = "<tbody>";
    data.forEach(element => {
        tmp += "<tr>";
        tmp += "<td>" + element["object"] + "</td>";
        tmp += "<td>" + element["date"] + "</td>";
        tmp += "<td>" + element["distance"] + "m" +  "</td>";
        tmp += "</tr>";
    })
    tmp += "</tbody>";

    return tmp;
}