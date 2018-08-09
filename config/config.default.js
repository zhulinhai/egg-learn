'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533794659311_9054';

  // add your config here
  config.middleware = [
    'robot',
  ];

  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return config;
};
