const bcrypt = require('bcrypt'); //for encryption of password..
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        min: [4, 'Too short min character is 4 charcter'],
        max: [32, 'Too long max character is 32 charcter'],
        required: 'User name is required'
    },
    email:{
        type: String,
        min: [4, 'Too short min character is 4 charcter'],
        max: [32, 'Too long max character is 32 charcter'],
        unique:true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4, 'Too short min character is 4 charcter'],
        max: [32, 'Too long max character is 32 charcter'],
        required: 'Password is required'
    },
    notify: {
        type: Boolean,
        default:false
    },
    usertype:{
        type: String,
        default: 'user'
    },
    phone: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    street:{type: String},
    city: {type:String},
    zip: {type:String},
    fname: {type:String},
    lname: {type:String}
});

//check if password is the same as password on file called in controllers/users
userSchema.methods.hasSamePassword = function(requestedPassword){
    return bcrypt.compareSync(requestedPassword, this.password);
}

//encrypt password before we save..
userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(15, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            next(); //go bk to save function
        });
    });
})

module.exports = mongoose.model('User', userSchema);

