
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
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
    usertype:{
      type: String,
      default: 'tech'
    },
    phone: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    street:{type: String},
    city: {type:String},
    zip: {type:String},
    fname: {type:String},
    lname: {type:String},
    resetPassword: {
      type:Boolean,
      default:true
    },
    confirmed: {
      type:Boolean,
      default:false
    }
});

userSchema.methods.hasSamePassword = function(requestedPassword){
  return bcrypt.compareSync(requestedPassword, this.password);
}

//encrypt password before we save..
userSchema.pre('save', function(next) {
  const employee = this;

  bcrypt.genSalt(15, function(err, salt) {
      bcrypt.hash(employee.password, salt, function(err, hash) {
        // Store hash in your password DB.
        employee.password = hash;
        next(); //go bk to save function
      });
  });
})

module.exports = mongoose.model('Employee', employeeSchema);