const express = require('express');

const router = express.Router();
const favs = require('./favs/routes');
const users = require('./users/routes');
const lists = require('./lists/routes');

router.use('/favs', favs);
router.use('/users', users);
router.use('/lists', lists);

module.exports(router);
