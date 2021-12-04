
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  time: {type: String},
  startTime:{type: Date},
  endTime:{type:Date},
  date: {type: String},
  day:{type: String},
  jobType: {type: String},
  owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  assignedTech: {type: String}
})

module.exports = mongoose.model('Job', jobSchema);