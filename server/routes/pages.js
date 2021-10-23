
const express = require('express'),
      router = express.Router();

const {
  getPages,
  getPageById,
  createPage,
  // deletePage,
  // updatePage
} = require('../controllers/pages');

router.get('', getPages);

router.get('/:pageName', getPageById);

router.post('', createPage);

// router.delete('/:pageName', deletePage);

// router.patch('/:pageName',updatePage);

module.exports = router;

