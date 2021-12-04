
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');


exports.login = (req, res) =>{

  const { email, password } = req.body;

  if(!password || !email){
    return res.sendApiError(
      {title: 'Data missing', 
        detail: 'Provide email and password'
      });
  }

  User.findOne({email}, (err, user) => {
    if(err){
      return res.mongoError(err);
    }

    if(!user) {
      return res.sendApiError(
        {
          title: 'Invalid user', 
          detail: 'Email cannot be found.'
        });
    }

    //hasSamePassword in model
    if(user.hasSamePassword(password)) {
      const token = jwt.sign({
        userId: user.id,
        username: user.username,
        usertype: user.usertype
      }, config.SECRET, { expiresIn: '24h' });
      return res.json(token);
    }else{
      return res.sendApiError(
        {title: 'Invalid password', 
          detail: 'Incorrect password.'
        });
    }

  })
}

exports.register = (req, res) => {
  // destructure object
  const { username, email, password, passwordConfirmation, notify } = req.body;

  if(!password || !email){
    return res.sendApiError(
      {title: 'Data missing', 
        detail: 'Provide email and password.'
      });
  }

  if(password !== passwordConfirmation){
    return res.sendApiError(
      {title: 'Invalid password', 
        detail: 'Password is not the same as confirmation.'
      });
  }

  // same as User.findOne({email: email});
  User.findOne({email}, function(error, existingUser) {
    if(error){
      return res.mongoError(err);
    }

    if(existingUser){ 
      return res.sendApiError(
        {title: 'Invalid Email', 
          detail: 'Email already exist.'
        });
    }

    const user = new User({
      username,
      email,
      password,
      notify
    });

    user.save((err) => { //go to bcrypt pre save for password in model
      if(err){
        return res.mongoError(err);
      }
      return res.json({'registered': true});
    });
  })
}// end register

exports.authMiddleWare = function(req, res, next){
  const token = req.headers.authorization;
  if(token){
      const {user, err} = parseToken(token);

      if(err){
        return res.status(422).send(err);
      }

      User.findById(user.userId, (err, foundUser) => {
          if(err){
            return res.mongoError(err);
          }

          if(foundUser){
              res.locals.user = foundUser;
              next();
          }else{
              return notAuthorized(res);
          }
      })

  }else{
      return notAuthorized(res);
  }
}//end authMiddleWare


function parseToken(token){
  try {
    const user = jwt.verify(token.split(' ')[1], config.SECRET);
    return { user };
  }catch(err){
    return {err: err.message};
  }
  
}

function notAuthorized(res){
  return res.status(401)
  .send({errors: [{title: 'You are not authorized', detail: 'Please login to gain access'}]});
}
