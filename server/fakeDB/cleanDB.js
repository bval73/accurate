
const mongoose = require('mongoose');
      config = require('../config'),
      FakeDB = require('./FakeDB');


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, 
async (err) => {
  if (err) {
    console.log('cleanDB', err);
  }
  const fakeDB = new FakeDB();
  await fakeDB.populate();
  await mongoose.connection.close();
  console.log("Clean DB");
});