
const pages = require('./data/pages');
const Page = require('../models/page');

const {users} = require('./data/users');
const User = require('../models/user');

const {jobs} = require('./data/jobs');
const Job = require('../models/job');

class FakeDB {

  async clean() {
    await Page.deleteMany({});
    await User.deleteMany({});
    await Job.deleteMany({});
  }

  async insertData() {
    await Page.create(pages);
    await User.create(users);
    await Job.create(jobs);
  }

  async populate() {
    await this.clean();
    await this.insertData();
  }

}

module.exports = FakeDB;

