import * as tasksModel from '../models/tasksModel.js'

const getAll = async (_req, res) => {

  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks)
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);

  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask( id );
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);
  return res.status(204).json();
};

export { getAll, createTask, deleteTask, updateTask };