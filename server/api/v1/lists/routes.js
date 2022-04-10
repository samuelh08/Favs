const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/').get(controller.list).post(controller.create);

router.route('/:id').get(controller.read).put(controller.update);

module.exports(router);
