'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const newsRouter = require('./router/news');
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/render', controller.render.index);
  router.get('/admin', controller.admin.index);
  newsRouter(app);
};
