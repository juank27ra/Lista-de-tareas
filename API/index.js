const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const {mongoose} = require('./database')

//settings
app.set('port', process.env.PORT || 3001)

//midlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
app.use('/task', require('./routes/task.routes')),

//static files
// console.log(path.join(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')));

// Startin the Server


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})