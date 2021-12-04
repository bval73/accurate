
const config = require('../config');

//UTILS
const { sendEmail } = require('../utils/mail/index');

exports.sendEmail = (req, res) => {
  const { fname, lname, email, comment } = req.body;
    let name = '';

  name = fname + ' ' + lname;
  sendEmail(email, name, null, "team", null, comment);
  // sendEmail(email, name, null, "thankyou");

  // setTimeout(() => {
  //   name = fname + ' ' + lname;
  //   sendEmail(email, name, null, "team", null, comment);
  // }, 3000);
  

  return res.status(200).json({
    success: true,
    message: 'Email has been sent',
  })
}
