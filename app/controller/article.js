'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');

class ArticleController extends Controller {
  //test
  async test(){
    const{ctx,app} = this
    const res = await app.mysql.select('dimkey')
    ctx.body = res
  }

  async findAll() {
    const {
      ctx,
      app,
    } = this;
    const res = await app.mysql.select('article');
    ctx.body = res;
  }

  async findById() {
    const { ctx, app } = this;
    const res = await app.mysql.select('article', {
      where: { id: ctx.query.id },
    });
    ctx.body = res;
  }

  async save() {
    const { ctx } = this;
    const data = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD hh:mm:ss'),
    };
    const result = await ctx.service.article.insert(data);
    if (result) {
      ctx.body = {
        status: 200,
        message: '添加成功',
      };
    } else {
      ctx.body = {
        status: 500,
        message: '发布失败',
      };
    }
  }
}

module.exports = ArticleController;
