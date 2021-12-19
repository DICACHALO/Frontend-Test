function concatJSON() {

    let values = {
        1: {
            carrier: "CCH",
            service: "DEX",
        },
        17: {
            carrier: "CHP",
            service: "express",
        }
    }

    let json = {
        data: {
            BUIN: {
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            },
            LAJA: {
                limit: 1,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },
            LEBU: {
                limit: 1,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },
            LOTA: {
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            }
        }
    }

    let result = json['data'];


    for (item in result) {
        for (let [key, value] of Object.entries(result[item])) {
            if (value == 17 && key == 'over_carrier_service_id') {
                result[item]['over'] = values[17];
                delete result[item]['over_carrier_service_id'];
            }
            else if (value == 17 && key == 'under_carrier_service_id') {
                result[item]['under'] = values[17];
                delete result[item]['under_carrier_service_id'];
            }
            else if (value == 1 && key == 'over_carrier_service_id') {
                result[item]['over'] = values[1];
                delete result[item]['over_carrier_service_id'];
            }
            else if (value == 1 && key == 'under_carrier_service_id') {
                result[item]['under'] = values[1];
                delete result[item]['under_carrier_service_id'];
            }
        }

    }
    result = JSON.stringify(result, null, '\t');
    return result;
}

document.getElementById("demo").innerHTML = `let result= <pre>${concatJSON()}</pre>`;


