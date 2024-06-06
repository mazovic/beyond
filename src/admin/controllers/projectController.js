const projectModel = require("./../models/projectModel");

exports.addNewProject = async (req, res) => {
  try {
    const { title, category, photo, content } = req.body;
    const project = await projectModel.create({
      title,
      category,
      photo,
      content,
    });
    res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error getting projects" });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    if (!projects) {
      return res.status(404).json({ error: "There is no projects" });
    }
    res.status(200).json({
      status: "success",
      results: projects.length,
      data: {
        projects,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: "error getting projects" });
  }
};

exports.getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ error: "Invalid Id" });
    }
    res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: "error getting projects" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { title, category, photo, content } = req.body;
    const { id } = req.params;
    const project = await projectModel.findByIdAndUpdate(
      id,
      { title, category, photo, content },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!project) {
      return res.status(404).json({ error: "Invalid Id" });
    }
    res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: "error getting projects" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await projectModel.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({ error: "error getting projects" });
  }
};
