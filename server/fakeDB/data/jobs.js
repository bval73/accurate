const mongoose = require('mongoose');
const user1Id = mongoose.Types.ObjectId();

exports.jobs = [
  {
    "date":"11-12-2021",
    "time":"07:00 am",
    "day":"Friday",
    "startTime":"2021-11-12T12:00:00.000Z",
    "jobType":"quote",
    "owner":user1Id,
    "assignedTech":"Bill Valentine"
  }
]