'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body = '新闻页面';
  }
  async list() {
    this.ctx.body = [];
  }
}

module.exports = NewsController;
