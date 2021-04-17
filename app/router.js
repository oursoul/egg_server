'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;

    router.get('/check', controller.show.check)
    router.get('/predict', controller.show.predict)
    router.get('/getkey', controller.show.getKey)
};