
const Page = require('../models/page');


exports.getPages = (req, res) => {
  Page.find({}, (err, foundPages) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundPages);
  });
};

exports.getPageById = (req, res) => {
  const { pageName } = req.params;

  Page.find({pageName}, (err, foundPage) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundPage);
  }).sort({ section: 'asc', side: 'asc'});
};

exports.createPage = (req, res) => {
  const pageData = req.body;
  const { lastChangedBy, usertype } = res.locals.user;

  pageData.lastChangedBy = res.locals.user._id;

  if(usertype === "admin") {
    Page.create(pageData, (err, createdPage) => {
      if(err) {
        return res.mongoError(err);
      }
      return res.json(createdPage);
    })
  }else{
    return res.json({message: 'You are not authorized for this operation'});
  }
};

