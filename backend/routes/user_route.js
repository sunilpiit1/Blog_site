const user = require('../models/user.model');
const token = require('../models/token.model');
const mongoose = require('mongoose');
const router = require('express').Router();
const bcrypt  = require('bcryptjs');
const box  = require('../models/box.model');

router.post('/user' ,  (req,res)=>
{
     let username  = req.body.username;
     let password = req.body.password;
     user.findOne({username})
     .then((res) =>
     {
        bcrypt.compare(password , res.password)
        .then((res)=>{
            if(res)
            {
                token.findOne({name:"jesse1254"})
                .then((res)=>{
                    res.token = 1;
                    res.save();
                });
               
            }
        })
     })
     
})



router.post('/register' , (req,res)=>
{
    const newUser  =  new user({
        username : req.body.username,
        password : req.body.password
    })
    
    bcrypt.genSalt(10 , (err,salt)=>{
        bcrypt.hash( newUser.password , salt ,  (err , hash) => {
            
            newUser.save();

        })
    })

})




router.get('/gettoken' , (req,res)=>{
     
    token.findOne({name:"jesse1254"})
    .then((token)=>{
        res.json(token);
    })

})

router.post('/logout' , (req,res)=>{

    token.findOne({name:"jesse1254"})
    .then((token)=>{
        token.token  = 0;
        token.save();
    })

})

router.post('/hitlike/:id' , (req,res)=>{

   box.findById(req.params.id)
   .then((blog)=>{
       let temp = blog.likes;
       blog.likes = temp +1;
       blog.save();
   })
 
})




module.exports = router;


