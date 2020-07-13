const mongoose  = require('mongoose');

let tokenSchema  = mongoose.Schema({

    name: {type:String , default:"jesse1254"},
    token : {type : Number , default : 0}
})

module.exports  = mongoose.model('token' , tokenSchema );