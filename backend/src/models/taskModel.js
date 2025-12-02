const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks ');
    return tasks;
    
};

const createTask = async (task) => {
    const { title } = task;
    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, NOW())';
    const [createdTask] = await connection.execute(query, [title, 'pendente']);
    return { insertId: createdTask.insertId };
}

const deleteTask = async (id) => {
    const removedTask = await connection.execute('delete from tasks where id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = 'update tasks set title = ?, status = ? where id = ?';
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
}

const getById = async (id) => {
    const [task] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    return task;
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
    getById
};