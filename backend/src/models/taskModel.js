const connection = require('./cponnection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
};

module.exports={
    getAll
};