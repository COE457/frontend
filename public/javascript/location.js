let locationTableHead = "<thead>\
                            <tr>\
                                <th>Location</th>\
                                <th>Date</th>\
                                <th>Currently There</th>\
                            </tr>\
                        </thead>";

const updateLocation = (window, document) => {
    $("#locationTable")
        .empty()
        .append(locationTableHead + genTableBody(fetchLocations()));
}

const fetchLocations = () => {
    return([
        {
            "location": "bedroom",
            "date": "12/09/2019 10:30:15",
            "currentlyThere": true
        },
        {
            "location": "kitchen",
            "date": "12/09/2019 10:25:33",
            "currentlyThere": false
        },
        {
            "location": "bathroom",
            "date": "12/09/2019 10:20:01",
            "currentlyThere": false
        }
    ]);
}

function genTableBody(data){
    let tmp = "<tbody>";
    data.forEach(element => {
        tmp += "<tr>";
        tmp += "<td>" + element["location"] + "</td>";
        tmp += "<td>" + element["date"] + "</td>";
        tmp += "<td>" + ((element["currentlyThere"])? "&#x2714;":"")+ "</td>";
        tmp += "</tr>";
    })
    tmp += "</tbody>";

    return tmp;
}