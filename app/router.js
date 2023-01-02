'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/render', controller.render.index);
  router.get('/news', controller.news.index);
  router.get('/news/list', controller.news.list);
  router.get('/admin', controller.admin.index);
};
