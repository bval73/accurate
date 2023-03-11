
//TODO: NEED UPDATE FOR WHEN JOB HAS TO BE ASSIGNED, IS COMPLETED, AND FOR TECH TO BE ASSIGNED

const Job = require('../models/job');
const moment = require('moment');

//UTILS
const { sendEmail } = require('../utils/mail/index');

exports.getTechJobs = async (req, res) => {
  Job.find({}, (err, foundJobs) => {
    if(err) {
      console.log('the mongoose error is ',err)
      return res.mongoError(err);
    }
    return res.json(foundJobs);
  });
}

exports.getAdminJobs = (req,res) => {
  Job.find({}, (err, foundJobs) => {
    if(err) {
      console.log('the mongoose error is ',err)
      return res.mongoError(err);
    }
    return res.json(foundJobs);
  });
}


// exports.getAdminJobs = (req,res) => {
  // const { job } = req.query;
  // const query = job ? Job.find({job}) : Job.find({});
  // try {
  //   // const jobs = await query.select('startAt endAt -_id').exec();
  //   const jobs = await query.select().exec();
  //   console.log('jobs are ',jobs);
  //   return res.json(jobs);
  // } catch (error) {
  //   return res.mongoError(error);
  // }

//   Job.find({}, (err, foundJobs) => {
//     if(err) {
//       console.log('the mongoose error is ',err)
//       return res.mongoError(err);
//     }
//     return res.json(foundJobs);
//   });
// }

// exports.getJobs = (req, res) => {
//   console.log('getJobs',req)
//   Job.find({}, (err, foundJobs) => {
//     if(err) {
//       return res.mongoError(err);
//     }
//     return res.json(foundJobs);
//   });
// };

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
  let { date, assignedTech } = req.params;

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
  
  console.log('assign tech')
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