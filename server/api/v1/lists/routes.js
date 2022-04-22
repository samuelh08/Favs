const express = require('express');
const controller = require('./controller');
const favRoutes = require('../favs/routes');

const { isAuthenticated, owner } = require('../auth');

const router = express.Router();

router.route('/').get(controller.list).post(isAuthenticated, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(isAuthenticated, controller.read)
  .put(isAuthenticated, owner, controller.update)
  .delete(isAuthenticated, owner, controller.delete);

router.use('/listId/favs', favRoutes);

module.exports = router;
