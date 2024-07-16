import connection from './connection.js';

const getAll = async () => {
  const [ tasks ] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'

  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC])

  return { insertId: createdTask.insertId };
};

export { getAll, createTask };
