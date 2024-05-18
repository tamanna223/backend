const express = require('express');
const router = express.Router();
const { getConfiguration, updateRemark } = require('../controllers/configController');

router.get('/:id', getConfiguration);
router.put('/:id', updateRemark);

module.exports = router;
