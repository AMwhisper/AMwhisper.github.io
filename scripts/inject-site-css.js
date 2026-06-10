'use strict';

hexo.extend.filter.register('after_render:html', function injectSiteCss(html) {
  if (html.includes('/css/site.css')) {
    return html;
  }

  return html.replace('</head>', '  <link rel="stylesheet" href="/css/site.css">\n</head>');
});
