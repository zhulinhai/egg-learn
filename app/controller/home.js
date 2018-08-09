'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async hello() {
    this.ctx.body = 'hello, world';
  }
}

module.exports = HomeController;
