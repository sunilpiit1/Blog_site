//REQUIRE STAGE
//this express a great framework to interact with server side based on node.js
const express = require('express');
const app = express();
//moongose help us to connect our server to a mongoDB datbase
const mongoose = require('mongoose');
//this is used to route or redirect to a particular file
const router  = require('express').Router();

const cors = require('cors');


//SETUP STAGE

//this will help us as a body parser -> that helps us to convert a data recievd during a 
//post req of body to a json format
app.use(express.json());

app.use(cors());

//this dotenv is used to load a env file into process.env file
require('dotenv').config;

const boxRouter  = require ('./routes/box_route');
app.use('/blog',boxRouter);

const userRouter = require('./routes/user_route');
app.use('/login' , userRouter);


//
//mongoose.connect( toString(process.env.ATLAS_URI) ,{useNewUrlParser : true , useCreateIndex : true} , () => {
//    console.log("connected successfully");
//});

const url  =  require('./keys').url;
mongoose.connect('mongodb+srv://jesse1254:jesse1254@blogsite.s9r4x.mongodb.net/box?retryWrites=true&w=majority' , { useNewUrlParser: true  ,useUnifiedTopology: true} , ()=>{
    console.log("connected to mongoDB!!");
});

mongoose.connection.once('open' , ()=>
{
    console.log("connected !!");
});





//PORT SETUP STAGE
//this is how our code will listen to a port -> either its gonna be a local_host or server host
const port  = 5000 || process.env.port;
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
