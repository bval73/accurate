const config = require('../../config'),
      mailer = require('nodemailer'),
      { thankyou } = require('./thankyou_template'),
      { team } = require('./team_template');

    
const getEmailData = (formData, template) => {
  let data = null;
  const {
    lname,
    fname,
    street,
    city,
    zip,
    phone,
    email,
    comment,
    time,
    startTime,
    date,
    day,
    jobType,
    username
  } = formData;

  const to = email ? email : formData.owner.email;
  const name = lname ? `${fname} ${lname}` : `${formData.owner.username}`;

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
        html:team(formData)
      } 
    break;

    default:
      data;
  }
  return data;
}

const sendEmail = (formData, type) => {
  const smptTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: config.GMAIL_USR, //linked to me gmail account for now
      pass: config.GMAIL_PASS
    }
  });

  const mail = getEmailData(formData, type);

  smptTransport.sendMail(mail, function(err, res) {
    if(err) {
      smptTransport.close();
      return err;
    } else {
      smptTransport.close();
      return res;
    }
  });
}

module.exports = { sendEmail };
