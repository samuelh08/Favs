const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/signup').post(controller.signup);
router.route('/login').post(controller.login);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports(router);
