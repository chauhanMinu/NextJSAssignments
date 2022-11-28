const mongoose = require('mongoose');

const nextjsSchema=mongoose.Schema({
    
    id:{
        type: String,
        unique: true,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    category:{
        type: String
    },
    image:{
        type: String
    }


})

mongoose.models={}
module.exports = mongoose.model('nextjsDb',nextjsSchema);