const Task = require('../models/task');

exports.getTask = (req, res) => {
  const tid = req.params.taskId;
  Task.findOne({ where: { id: tid } }).then((task) => {
    if (!task) {
      res.status(400).json('error');
    }
    res.status(200).json(task);
  });
};
exports.getAllTasks = (req, res) => {
  const uid = req.params.userId;
  Task.findAll({ where: { user: uid } }).then((task) => {
    if (!task) {
      res.status(400).json('error');
    }
    res.status(200).json(task);
  });
};
exports.createTask = (req, res) => {
  const uid = req.body.user;
  Task.create(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
exports.updateTask = (req, res) => {
  const taskData = req.body;
  const tid = req.params.taskId;
  Task.update(taskData, {
    where: {
      id: tid,
    },
  })
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(400).json('Update Failed!');
    });
};
exports.deleteTask = (req, res) => {
  Task.destroy({
    where: {
      id: req.params.taskId,
    },
  })
    .then(() => {
      res.status(201).json('Successfully Deleted!');
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
