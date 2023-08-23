const Categorymodel = require("../models/category.model");

exports.create = async (req, res) => {
  try {
    const { name, title, description } = req.body;

    
    if (
      !req.body.name &&
      !req.body.title &&
      !req.body.description
    ) {
      res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new Categorymodel({
      name: name,
      title: title,
      description: description
      
    });

    const savedUser = await user.save();

    res.status(201).send({
      message: "category data created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "An error occurred while creating user data",
    });
  }
};
  
  exports.findOne = async (req, res) => {
    try {
      const user = await Categorymodel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const { id, name, title, description } = req.body;

  
    await Categorymodel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `User data not found.`,
          });
        } else {
          res.send({ message: "Category data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  };
  
  exports.destroy = async (req, res) => {
    const { id} = req.body;
    await Categorymodel.findByIdAndRemove(id, req.body)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Category data not found.`,
          });
        } else {
          res.send({
            message: "Category data deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  };