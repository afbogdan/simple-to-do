// ./routes/index.js
const todo = require('./todo')

module.exports = app => {
  app.use('/todo', todo)
}