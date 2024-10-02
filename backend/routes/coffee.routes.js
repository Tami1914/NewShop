module.exports = app => {
    const coffees = require("../controllers/coffee.controllers.js");

    var router = require("express").Router();

    router.post("/", coffees.create);

    router.get("/", coffees.findAll);

    router.get("/:id", coffees.findOne);

    router.put("/:id", coffees.update);

    router.delete("/:id", coffees.delete);

    app.use('/api/coffee', router);
};