const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

router.get('/', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM todos');
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('SELECT * FROM todos WHERE id = $1', [id])
        res.send(rows[0]);
    } catch (error) {
        // need to cover cases
        console.log(error);
        res.status(500).send('Something went wrong');
    }
    
});

router.post('/', async (req, res) => {
    try {
        const { title, deadline, description } = req.body;
        await db.query('INSERT INTO todos(title, deadline, description, is_done) VALUES ($1, $2, $3, $4)', [title, deadline, description, false])
        const { rows } = await db.query('SELECT * FROM todos');
        
        res.send(rows);
    } catch (err) {
        // need to cover cases
        console.log(error);
        res.status(500).send('Something went wrong');
    }
});

// export our router to be mounted by the parent application
module.exports = router;