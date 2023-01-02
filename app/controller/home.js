'use strict';

const { Controller } = require('egg');
// MVC
// model(service)
// Controller
// view
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
