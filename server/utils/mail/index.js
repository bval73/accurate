const config = require('../../config'),
      mailer = require('nodemailer'),
      { thankyou } = require('./thankyou_template'),
      { team } = require('./team_template');

    
const getEmailData = (to, name, token, template, actionData, comment) => {
  let data = null;

  switch(template) {
    case 'thankyou':
      data = {  
        from: `Accurate Softwash <{GMAIL_USR}>`,
        to,
        subject: `Thank you for your inquiry ${name}`,
        html:thankyou(name)
      } 
    break;
    case 'team':
      data = {
        from: config.GMAIL_USR,
        to,
        subject: `Message from ${name}`,
        html:team(name, comment, to)
      } 
    break;

    default:
      data;
  }
  return data;
}

const sendEmail = (to, name, token, type, actionData, comment) => {
  const smptTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: config.GMAIL_USR, //linked to me gmail account for now
      pass: config.GMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type, actionData, comment);

  smptTransport.sendMail(mail, function(err, res) {
    if(err) {
      console.log(err);
      smptTransport.close();
      return err;
    } else {
      smptTransport.close();
      return res;
    }
//    smptTransport.close();
  });
}

module.exports = { sendEmail };
