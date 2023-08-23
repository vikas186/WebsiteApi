const Blogmodel = require("../models/blog.model");

exports.create = async (req, res) => {
  const file = req.file;
  const { title, description } = req.body;
  console.log(file);
  if (!req.body.image && !req.body.title && !req.body.description) {
    res.status(400).json({ message: "Content can not be empty!" });
  }

  const user = new Blogmodel({
    image: file.filename,
    title: title,
    description: description,
  });

  await user
    .save()
    .then((data) => {
      res.json({
        message: "Blog data created successfully!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating user data",
      });
    });
};

exports.findOne = async (req, res) => {
  try {
    const user = await Blogmodel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { id, title, description } = req.body;
  const file = req.file;
  const user = await Blogmodel.findOne({_id:id});

  if (!user) {
    res.status(400).json({
      message: "Data to update can not be empty!",
    });
  }
  if (file) {
    await Blogmodel.findByIdAndUpdate(id, {
      image: file.filename,
      title: title,
      description: description,
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `User data not found.`,
          });
        } else {
          res.json({ message: "blog data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  } else {
    await Blogmodel.findByIdAndUpdate(id, {
      title: title,
      description: description,
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `User data not found.`,
          });
        } else {
          res.json({ message: "blog data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.body;
  await Blogmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Blog data not found.`,
        });
      } else {
        res.json({
          message: "Blog data deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

exports.blogUpdate = async (req,res) => {
  const title = req.body.title

  // console.log("==========", title);

  res.status(200).json({ message: `Blog Update successfully.`,title:title});
}
