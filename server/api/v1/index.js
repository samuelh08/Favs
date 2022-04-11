const express = require('express');

const router = express.Router();
const favs = require('./favs/routes');

router.use('/favs', favs);

module.exports(router);
