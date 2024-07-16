import * as tasksModel from '../models/tasksModel.js'

const getAll = async (_req, res) => {

  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks)
};

const createTask = async(req, res) => {
  const createdTask = await tasksModel.createTask(req.body);

  return res.status(201).json(createdTask);
};

export { getAll, createTask };