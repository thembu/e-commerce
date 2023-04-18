const mongoose = require('mongoose')


// the way our data will be structured in the database
const UserSchema = new mongoose.Schema ({
    userName : {type :String, unique: true},
    password : {type:String, select:true},
    email : {type : String, unique: true}
})


module.exports  = mongoose.model('users', UserSchema) // export our user model to the rest if the files