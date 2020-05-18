var express = require("express");
var burgers = require("../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
    burgers.getAll((data) => {
        var hbsBurgerObject = {
            burgers: data
        };
        res.render("index", hbsBurgerObject)
    });
});

router.post("/api/burgers", (req, res) => {
    burgers.newBurger([
        "name", "sleepy"
    ], [
        req.body.burger, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var state = "id = " + req.params.id;

    burgers.updateState({
        devoured: req.body.devoured
    }, state, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;