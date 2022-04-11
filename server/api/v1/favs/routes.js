const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/').get(controller.list).post(controller.create);

router.param('id', controller.id);

router.route('/:id').get(controller.read).delete(controller.delete);

module.exports(router);
