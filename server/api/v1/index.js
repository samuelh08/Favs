const express = require('express');

const router = express.Router();
const lists = require('./lists/routes');

router.use('/lists', lists);

module.exports(router);
