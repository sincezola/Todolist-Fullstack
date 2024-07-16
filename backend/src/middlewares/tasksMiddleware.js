import { response } from "express";

const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'The field "title" is required' })
  }

  if (body.title === '') {
    return response.status(400).json({message: 'title cannot be empty'})
  }

  next();
};

export { validateBody }