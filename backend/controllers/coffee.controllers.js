const db = require("../models");
const Coffee = db.coffees;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.country) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Coffee
    const coffee = {
        country: req.body.country,
        flavor: req.body.flavor
    };

    // Save Coffee in the db
    Coffee.create(coffee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500),send({
                message:
                    err.message || "Some error ocurred while creating the coffee."
            });
        });
};

exports.findAll = (req, res) => {
    Coffee.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving coffees."
            });
        });
};

exports.findOne = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Coffee.destroy({ where: { id: id } }).then(() => {
        console.log("Se borró el cafe");
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Coffee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Coffee was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Coffee with id=${id}. Maybe Coffee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Coffee with id=" + id
        });
      });
  };