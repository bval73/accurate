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
  console.log('page name is ', pageName);

  Page.find({pageName}, (err, foundPage) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundPage);
  }).sort({ section: 'asc', side: 'asc'});
};

exports.createPage = (req, res) => {
  const pageData = req.body;
 
  Page.create(pageData, (err, createdPage) =>{
    if(err) {
      return res.mongoError(err);
    }
    return res.json({message: `Page with id: ${createdPage._id} was added`});
  })
};
