
const config = require('../config');

//UTILS
const { sendEmail } = require('../utils/mail/index');

exports.sendEmail = (req, res) => {
  const { fname, lname, email, comment } = req.body;
    let name = '';
  name = fname + ' ' + lname;
  sendEmail(email, name, null, "thankyou");
  // need to put in a timeout sends it to fast may cause an issue with spamming
  setTimeout(() => {
    name = fname + ' ' + lname;
    sendEmail(email, name, null, "team", null, comment);
  }, 2000);
  

  return res.status(200).json({
    success: true,
    message: 'Email has been sent',
  })
}

