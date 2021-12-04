
const express = require('express'),
      router = express.Router(),
      { authMiddleWare } = require('../controllers/users');

const {
  getPages,
  getPageById,
  createPage,
  // deletePage,
  // updatePage
} = require('../controllers/pages');

router.get('', getPages);

router.get('/:pageName', getPageById);

router.post('', authMiddleWare, createPage);

// router.delete('/:pageName', deletePage);

// router.patch('/:pageName',updatePage);

module.exports = router;

