const mongoose = require ('mongoose');

const dbmongo = 'mongodb://localhost/mern-task-list'

mongoose.connect(dbmongo)
    .then( db => console.log('Database connected'))
    .catch(err => console.log(err))


module.exports = mongoose