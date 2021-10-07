const express = require('express');
const router = express.Router();

const {
  getTaskById,
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/task');

router.get('/task/:taskId', getTask);
router.get('/tasks/:userId', getAllTasks);

router.post('/task/create', createTask);
router.post('/task/update/:taskId', updateTask);
router.post('/task/delete/:taskId', deleteTask);

module.exports = router;
