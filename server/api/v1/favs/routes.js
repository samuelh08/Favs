const express = require('express');
const controller = require('./controller');

const { isAuthenticated, owner } = require('../auth');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(controller.parentId, isAuthenticated, controller.list)
  .post(controller.parentId, isAuthenticated, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.parentId, isAuthenticated, controller.read)
  .put(controller.parentId, isAuthenticated, owner, controller.update)
  .delete(controller.parentId, isAuthenticated, owner, controller.delete);

module.exports = router;
