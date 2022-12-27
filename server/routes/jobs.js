
const express = require('express');
const router = express.Router();
const { authMiddleWare } = require('../controllers/users');

const {
  getJobs,
  getJobById,
  getJobByDt,
  getJobByDtTech,
  createJob,
  sendApptEmail
} = require('../controllers/jobs');


router.get('', getJobs);
router.get('/:id', getJobById);
router.get('/day/:date', getJobByDt);
router.get('/tech/:assignedTech/:date', getJobByDtTech);

router.post('/appointment/sendEmail', sendApptEmail);

router.post('', authMiddleWare, createJob);


module.exports = router;

