const router = require('express').Router();
const box  = require('../models/box.model');
const mongoose  = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());




router.get('/',(req,res) => {
     
    box.find()
    .then((blogs)=> {
         res.json(blogs)
    }) 
    
   
});

router.post('/new' , (req,res) => {
    
     console.log(req.body);

     const blog  =  new box ({
        
          title : req.body.title,
          url : req.body.url,
          summary : req.body.summary,
         


     })
     
     
     blog.save()
     .then(()=> console.log("anil and sunil"));
});




router.get('/:id' ,(req,res)=>{

     box.findById(req.params.id)
     .then((blog)=> {
          res.json(blog)
     }) 


})

router.delete('/:id/delete',(req,res)=>{

     box.findById(req.params.id)
     .then((blog)=>{
          blog.deleteOne();
     })

})

router.get('/:id/edit',(req,res)=>{

     box.findById(req.params.id)
     .then((blog)=>{
          res.json(blog)
     })

})

router.post('/:id/edit/update',(req,res)=>{
     
    
     box.findById(req.params.id)
     .then((blog)=>{
          blog.title = req.body.title;
          blog.url = req.body.url;
          blog.summary = req.body.summary;
          blog.save();
     })
    

})




module.exports = router ; 
