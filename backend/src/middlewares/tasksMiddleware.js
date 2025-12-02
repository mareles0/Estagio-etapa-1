const validartitulo = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({ message: 'O campo "title" é obrigatório' });
    }
    if (body.title === '' || body.title.trim() === '') {
        return res.status(400).json({ message: 'O campo "title" não pode ser vazio' });
    }

    next();
};

const validarStatus = (req, res, next) => {
    const { body } = req;

    if(body.status === undefined) {
        return res.status(400).json({ message: 'O campo "status" é obrigatório' });
    }

    if(body.status === '' || body.status.trim() === '') {
        return res.status(400).json({ message: 'O campo "status" não pode ser vazio' });
    }   
    next();
};

module.exports = {
    validartitulo,
    validarStatus
};