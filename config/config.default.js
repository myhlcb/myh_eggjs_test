/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1672656641300_8505';

  // add your middleware config here
  config.middleware = [ 'addTime' ];
  config.addTime = { threshold: 1024 };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 给中间件传入options
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.newsApi = 'https://i.news.qq.com';

  return {
    ...config,
    ...userConfig,
  };
};
