const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ALLOWED_RATINGS = [1,2,3,4,5];

const reviewSchema = new Schema({
  rating: Number,
  text: String,
  createdAt: { type: Date, default: Date.now},
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  job: { type: Schema.Types.ObjectId, ref: 'Job'}
});

module.exports = mongoose.model('Review', reviewSchema);

reviewSchema.pre('save', function(next) {
  
  if(ALLOWED_RATINGS.indexOf(this.rating) >= 0) {
    next();
  } else {
    const err = new Error({rating: 'Not a valid rating...'});
    err.errors = {};
    err.errors.rating = {message: 'Not a valid rating...'};
    next(err);
  }
});