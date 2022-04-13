const express = require('express');
const controller = require('./controller');
const favRoutes = require('../favs/routes');

const router = express.Router();

router.route('/').get(controller.list).post(controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

router.use('/listId/favs', favRoutes);

module.exports(router);
