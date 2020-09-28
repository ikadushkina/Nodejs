const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs')


const userSchema = new schema({
    login: String,
    password: String,
    date: Date
})

userSchema.methods.comparePassword =  function (pass){
    return bcrypt.compareSync(pass, this.password );
}


const UserModel = mongoose.model("User", userSchema);


module.exports = UserModel

