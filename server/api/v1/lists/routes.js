const express = require('express');
const controller = require('./controller');
const favRoutes = require('../favs/routes');

const { auth, owner } = require('../auth');

const router = express.Router();

router.route('/').get(controller.list).post(auth, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(auth, owner, controller.update)
  .delete(auth, owner, controller.delete);

router.use('/listId/favs', favRoutes);

module.exports(router);
