const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  pageName:{ type: String, required: true },
  pageTitle: { type: String, required: false, max: [128, 'Too long, max is 128 characters']},
  side:{ type:String, required: true },
  image: { type: String, required: false },
  p: [{type: String, required: false }],
  sectionTitle:{ type: String, required:false },
  section: Number,
});

//available on instance
// pageSchema.methods.sendError = function(res, config) {
//   const {status, title, detail} = config;
//   return res
//         .status(status)
//         .send({errors: [{title, detail}]});
// }

pageSchema.statics.sendError = function(res, config) {
  const {status, title, detail} = config;
  return res
        .status(status)
        .send({errors: [{title, detail}]});
}


module.exports = mongoose.model('Page', pageSchema);