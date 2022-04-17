const express = require('express');
const controller = require('./controller');

const { auth, owner } = require('../auth');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(controller.parentId, controller.list)
  .post(controller.parentId, auth, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.parentId, controller.read)
  .put(controller.parentId, auth, owner, controller.update)
  .delete(controller.parentId, auth, owner, controller.delete);

module.exports(router);
