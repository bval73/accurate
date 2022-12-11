
const mongoose = require('mongoose');
const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

exports.users = [{
  _id: user1Id,
  username: "Test User",
  email: "none@none.com",
  password: "",
  notify: false,
  usertype:'admin'
}, 
{
  _id: user2Id,
  username: "Test User2",
  email: none@none.com",
  password: "",
  notify: true
}
]


