var connection = require("./connection");

function questionMarks(numbers) {
    var marks = [];

    for (var i = 0; i < numbers; i++) {
        marks.push("?")
    }

    return marks.toString
}

function burgerStateObjToSql(burgerWithState) {
    var stateArray = [];

    for (var key in burgerWithState) {
        var value = burgerWithState[key];
        if (Object.hasOwnProperty.call(burgerWithState, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'"
            }

            stateArray.push(key + "=" + value)
        }
    }
    return stateArray.toString();
}

var orm = {
    selectAll: (table, callBack) => {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {throw err}
            callBack(result);
        })
    },
    insertOne: (table, columns, values, callBack) => {
        var queryString = "INSERT INTO " + table + "(" + columns + ") VALUES (" + questionMarks(values) + ")";
        connection.query(queryString, values, (err, result) => {
            if (err) {throw err}
            callBack(result);
            console.log(result)
        })
        
    },
    updateOne: (table, burgerObject, state, callBack) => {
        var queryString = "UPDATE " + table + " SET " + burgerStateObjToSql(burgerObject) + " WHERE " + state;
        connection.query(queryString, (err, result) => {
            if (err) {throw err}
            callBack(result);
        })
    }
}

module.exports = orm