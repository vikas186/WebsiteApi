const Teammodel = require("../models/team.model");

exports.create = async (req, res) => {
  const file = req.file
  const {name, title, description} = req.body
  console.log(file);
    if (
      !req.body.image &&
      !req.body.name &&
      !req.body.title &&
      !req.body.description
     
    ) {
      res.status(400).send({ message: "Content can not be empty!" });
    }
  
    const user = new Teammodel({
      image: file.filename,
      name: name,
      title: title,
      description: description
    });
  
    await user
      .save()
      .then((data) => {
        res.send({
          message: "Team data created successfully!!",
          user: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating user data",
        });
      });
  };

  exports.findOne = async (req, res) => {
    try {
      const user = await Teammodel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  exports.updateTeam = async (req, res) => {
    const { id, name, title, description } = req.body;
    const file = req.file;
    const user = await Teammodel.findOne({_id:id});
  
    if (!user) {
      res.status(400).json({
        message: "Data to update can not be empty!",
      });
    }
    if (file) {
      await Teammodel.findByIdAndUpdate(id, {
        image: file.filename,
        name: name,
        title: title,
        description: description,
      })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Team data not found.`,
            });
          } else {
            res.send({ message: "Team data updated successfully." });
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
          });
        });
    } else {
      await Teammodel.findByIdAndUpdate(id, {
        title: title,
        description: description,
      })
        .then((data) => {
          if (!data) {
            res.status(404).json({
              message: `Team data not found.`,
            });
          } else {
            res.json({ message: "Teammodel data updated successfully." });
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
          });
        });
    }
  };
  
  exports.destroy = async (req, res) => {
    const { id } = req.body;
    await Teammodel.findByIdAndRemove(id, req.body)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Team data not found.`,
          });
        } else {
          res.send({
            message: "Team data deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  };