'use strict';

const Controller = require('egg').Controller;

class RenderController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('render', { data: 'world' });
  }
}

module.exports = RenderController;
