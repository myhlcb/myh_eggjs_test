'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const reportTime = app.middleware.report({ title: 'to get request time' });
  router.get('/news', controller.news.index);
  router.get('/news/list', reportTime, controller.news.list);
};
