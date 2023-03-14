const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    ipAddress:{
        type: String,
        required: true
    },
    location:{
       type:Object,
       require: true
    },
    loginSessions:[{
        date:{
            type: Date,
            default: Date.now
        },
        ipAddress:{
            type: String,
            required: true
        },
        location:{
           type:Object,
           require: true
        },
        token:{
            type:String,
            require: true,
        }
    }],
});


module.exports = mongoose.model('user',UserSchema);