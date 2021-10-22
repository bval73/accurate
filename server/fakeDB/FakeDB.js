
const pages = require('./data/pages');
const Page = require('../models/page');

const {rentals, users} = require('./data/rentals');
const Rental = require('../models/rental');

const User = require('../models/user');

class FakeDB {

  async clean() {
    await Rental.deleteMany({});
    await Page.deleteMany({});
    await User.deleteMany({});
  }

  async insertData() {
    await Rental.create(rentals);
    await Page.create(pages);
    await User.create(users);
  }

  async populate() {
    await this.clean();
    await this.insertData();
  }

}

module.exports = FakeDB;

