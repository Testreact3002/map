import { configure } from '@storybook/react';
/*
 *  function executed in browser
 */
function loadStories() {
  require("../../stories/index.js");
  const link = document.createElement('link');
  link.setAttribute('href', 'css/main.min.css');
  link.setAttribute('rel','stylesheet');
  link.setAttribute('type','text/css');
  document.head.appendChild(link);
  
}
configure(loadStories, module);
