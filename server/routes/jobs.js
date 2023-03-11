
const express = require('express');
const router = express.Router();
const { authMiddleWare } = require('../controllers/users');

const {
  // getJobs,
  getJobById,
  getJobByDt,
  getJobByDtTech,
  createJob,
  sendApptEmail,
  getTechJobs,
  getAdminJobs
} = require('../controllers/jobs');

// router.get('', authMiddleWare, getJobs);
router.get('/admin',authMiddleWare, getAdminJobs);
router.get('/tech',authMiddleWare, getTechJobs);
router.get('/:id', getJobById);
router.get('/:date', getJobByDt);
router.get('/tech/:assignedTech/:date', getJobByDtTech);

router.post('/appointment/sendEmail', sendApptEmail);

router.post('', authMiddleWare, createJob);


module.exports = router;

