
const config = require('../config');

//UTILS
const { sendEmail } = require('../utils/mail/index');

exports.sendEmail = (req, res) => {
  const contactData = req.body;
  const { fname, lname, email, comment } = req.body;
    let name = '';
  name = fname + ' ' + lname;
  sendEmail(contactData, "thankyou");
  // need to put in a timeout sends it to fast may cause an issue with spamming
  setTimeout(() => {
    name = fname + ' ' + lname;
    sendEmail(contactData, "team");
  }, 2000);
  

  return res.status(200).json({
    success: true,
    message: 'Email has been sent',
  })
}

