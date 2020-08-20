const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

router.get('/', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM todos ORDER BY id ASC ');
        res.send(rows);
    } catch (err) {
        // need to cover cases
        console.log(err);
        res.status(500).send('Something went wrong');
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('SELECT * FROM todos WHERE id = $1', [id])
        res.send(rows[0]);
    } catch (err) {
        // need to cover cases
        console.log(err);
        res.status(500).send('Something went wrong');
    }
    
});

router.post('/', async (req, res) => {
    try {
        const { title, deadline, description } = req.body;
        await db.query('INSERT INTO todos(title, deadline, description, is_done) VALUES ($1, $2, $3, $4)', [title, deadline, description, false])
        const { rows } = await db.query('SELECT * FROM todos ORDER BY id ASC ');
        
        res.send(rows);
    } catch (err) {
        // need to cover cases
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.query('DELETE FROM todos WHERE id = $1', [id])
        const { rows } = await db.query('SELECT * FROM todos ORDER BY id ASC ');
        
        res.send(rows);
    } catch (err) {
        // need to cover cases
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const payloadKeys = Object.keys(payload);

        const selectReqData = await db.query('SELECT * FROM todos WHERE id = $1', [id])
        const task = selectReqData.rows[0];

        for (let key of payloadKeys) {
            task[key] = payload[key];
        }

        await db.query('UPDATE todos SET title=$1, description=$2, deadline=$3, is_done=$4 WHERE id = $5', 
            [task.title, task.description, task.deadline, task.is_done, task.id])

        // get the entire updated list and send it back
        const { rows } = await db.query('SELECT * FROM todos ORDER BY id ASC ');
        res.send(rows);
    } catch (err) {
        // need to cover cases
        console.log(err);
        res.status(500).send('Something went wrong');
    }
})

// export our router to be mounted by the parent application
module.exports = router;