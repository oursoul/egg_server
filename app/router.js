'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/article/findAll', controller.article.findAll);
  router.post('/article/addArticle', controller.article.save);
  router.get('/article/findById', controller.article.findById);
  router.get('/test',controller.article.test)
};
