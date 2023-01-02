'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const baseURL = this.config.newsApi;
    const res = await this.ctx.curl(`${baseURL}/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=news_top_2018`);
    return JSON.parse(res.data);
  }
}

module.exports = NewsService;
