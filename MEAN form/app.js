//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port no

const port = 3000;

const route = require('./route/route')
//connect to mongodb via mongoose
mongoose.connect('mongodb://localhost:27017/contactlist')
//onConnection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
})

mongoose.connection.on('error',(err)=>{
    console.log("Error:"+err)
})
//adding middleware
app.use(cors());
//body-parser
app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname,'public')))

app.use('/api', route);
//testing server
app.get('/',(req,res)=>{
    res.send('foobar')
})

app.listen(port,()=>{
    console.log("Server started at port:"+port);
})