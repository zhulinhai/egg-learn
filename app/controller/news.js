'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsLst = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsLst });
  }
}

module.exports = NewsController;
