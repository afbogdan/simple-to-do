const express = require('express');
const cors = require('cors');
const mountRoutes = require('./routes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

mountRoutes(app);

app.listen(5000, () => {
    console.log('Server started on port 5000')
})
