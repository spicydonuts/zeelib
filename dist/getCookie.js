'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var getCookie=function(a){var b='; '+document.cookie,c=b.split('; '+a+'=');if(2===c.length)return c.pop().split(';').shift()};exports.default=getCookie;