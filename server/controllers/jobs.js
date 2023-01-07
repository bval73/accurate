
//TODO: NEED UPDATE FOR WHEN JOB IS COMPLETED AND FOR TECH TO BE ASSIGNED

const Job = require('../models/job');

//UTILS
const { sendEmail } = require('../utils/mail/index');

exports.getJobs = (req, res) => {
  Job.find({}, (err, foundJobs) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundJobs);
  });
};

exports.getJobById = (req, res) => {
  const { id } = req.params;

  Job.findById(id, (err, foundJob) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundJob);
  })//.sort({ section: 'asc', side: 'asc'});
};

exports.getJobByDt = (req, res) => {
  const { date } = req.params;

  Job.find(date, (err, foundJobs) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundJobs);
  })  //.sort({ section: 'asc', side: 'asc'});
};

exports.getJobByDtTech = (req, res) => {
  const { date, assignedTech } = req.params;

  Job.find({date, assignedTech}, (err, foundJobs) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundJobs);
  })  //.sort({ section: 'asc', side: 'asc'});
};

exports.createJob = (req, res) => {
  
  const jobData = req.body;
  jobData.owner = res.locals.user;

  Job.create(jobData, (err, createdJob) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(createdJob);
  });
}

exports.jobCompleted = (req, res) => {
  
  console.log('job completed')
}

exports.assignTech = (req, res) => {
  
  console.log('asign tech')
}//.sort({ date: 'asc'});

exports.sendApptEmail = (req, res) => {
  const data = req.body.data;
  data.comment = `${data.owner.username} sent a ${data.jobType} request for ${data.day} ${data.date} at ${data.time} `;

  sendEmail(req.body.data, "team");

  return res.status(200).json({
    success: true,
    message: 'Email has been sent',
  })
}