
const User = require('../models/user');
const jose = require('jose');
const config = require('../config');


exports.login = (req, res) =>{

  const { email, password } = req.body;
  
  if(!password || !email){
    return res.sendApiError(
      {title: 'Data missing', 
        detail: 'Provide email and password'
      });
  }

  User.findOne({email}, async (err, user) => {
    const secret = new TextEncoder().encode(config.SECRET);
    // const secret = jose.util.base64url.encode(config.SECRET)
    const alg = 'HS256';
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
      const token = await new jose.SignJWT({
        'userId': user.id,
        'username': user.username,
        'usertype': user.usertype
      })
      .setProtectedHeader({ alg })
      .setIssuer('http://localhost:3000')
      .setAudience('public')
      .setExpirationTime('24h')
      .sign(secret);
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

exports.authMiddleWare = async function(req, res, next){
  const token = req.headers.authorization;

  if(token){
      const {payload, err} = await parseToken(token);
      if(err){
        return res.status(422).send(err);
      }

      User.findById(payload.userId, (err, foundUser) => {
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


async function parseToken(token){
  try {
    let payload = {};
    try {
      payload = jose.decodeJwt(token);
    } catch (err) {
      sessionStorage.removeItem('acc-token');
      notAuthorized(err);
    }
    return { payload };
  }catch(err){
    return {err: err.message};
  }
  
}

function notAuthorized(res){
  return res.status(401)
  .send({errors: [{title: 'You are not authorized', detail: 'Please login to gain access'}]});
}
