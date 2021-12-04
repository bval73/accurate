
const mongoose = require('mongoose');
const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

exports.users = [{
  _id: user1Id,
  username: "Test User",
  email: "test@gmail.com",
  password: "testtest",
  notify: false,
  usertype:'admin'
}, 
{
  _id: user2Id,
  username: "Test User2",
  email: "test2@gmail.com",
  password: "testtest2",
  notify: true
}
]


