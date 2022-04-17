const express = require('express');
const controller = require('./controller');
const { auth, me } = require('../auth');

const router = express.Router();

router.route('/signup').post(controller.signup);
router.route('/login').post(controller.login);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(auth, me, controller.update)
  .delete(auth, me, controller.delete);

module.exports(router);
