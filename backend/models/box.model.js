const mongoose  = require('mongoose');

let boxSchema  = mongoose.Schema(

    {
   

        title : 
        {
            type : String, 
           // required : true ,
            trim : true , 
            default : "sunil"
        },
    
        url : {
            type : String,
           // required : true , 
            trim : true , 
            // unique : true ,
            //default : 
        },
        summary :
        {
            type : String,
           // required : true,
            trim : true , 
    
        },
        date :
        {
            type: Date ,
            default : Date.now,
        }
        ,

        likes :
        {
            type:Number,
            default:0,
        }
    
    }

);

 
module.exports = mongoose.model('box' , boxSchema); ;
    
