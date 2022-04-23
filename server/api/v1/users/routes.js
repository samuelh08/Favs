const express = require('express');
const controller = require('./controller');
const { isAuthenticated, me } = require('../auth');

const router = express.Router();

router.route('/signup').post(controller.signup);
router.route('/login').post(controller.login);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(isAuthenticated, me, controller.update)
  .delete(isAuthenticated, me, controller.delete);

module.exports = router;
