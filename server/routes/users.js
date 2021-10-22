
const express = require('express');
const { createPage } = require('../controllers/pages');
const router = express.Router();
const {
  login,
  register
} = require('../controllers/users');

//see server/index for below comment
//router.post('/login', middleware, login);

router.post('/login', login);
router.post('/register', register);

module.exports = router;

