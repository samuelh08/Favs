const express = require('express');

const router = express.Router();
const favs = require('./favs/routes');
const users = require('./users/routes');

router.use('/favs', favs);
router.use('/users', users);

module.exports(router);
