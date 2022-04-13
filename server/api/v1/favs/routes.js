const express = require('express');
const controller = require('./controller');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(controller.parentId, controller.list)
  .post(controller.parentId, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.parentId, controller.read)
  .put(controller.parentId, controller.update)
  .delete(controller.parentId, controller.delete);

module.exports(router);
