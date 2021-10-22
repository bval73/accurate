const express = require('express'),
      router = express.Router();

const {
  sendEmail
} = require('../controllers/contact');

router.get('', sendEmail);

module.exports = router;