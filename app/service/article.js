'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async insert(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = ArticleService;
