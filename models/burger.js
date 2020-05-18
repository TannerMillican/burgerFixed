var orm = require("../config/orm");

var burgers = {
    getAll: (callBack) => {
        orm.selectAll("burgers", (result) => {
            callBack(result);
        });
    },
    newBurger: (callBack) => {
        orm.insertOne("burgers", columns, values, (result) => {
            callBack(result)
        })
    },
    updateState: (callBack) => {
        orm.updateOne("burgers", burgerObject, state, (result) => {
            callBack(result)
        })
    }
}

module.exports = burgers;