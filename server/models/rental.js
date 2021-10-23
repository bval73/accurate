const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    numOfRooms: { type: Number, required: true },
    shared: Boolean,
    description: { type: String, required: true },
    dailyRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
    // user: {type: Schema.Types.ObjectId, ref: 'User'},
    // bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}]
});

rentalSchema.statics.sendError = function(res, config) {
    const {status, title, detail, err} = config;
    return res
          .status(status)
          .send({errors: [{title, detail, err}]});
  }

module.exports = mongoose.model('Rental', rentalSchema);