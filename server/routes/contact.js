const express = require('express'),
      router = express.Router();

const {
  sendEmail
} = require('../controllers/contact');

router.post('/sendEmail', sendEmail);

module.exports = router;
