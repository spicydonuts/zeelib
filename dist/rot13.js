'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var rot13=function(a){return a.split('').map(function(a){if(!a.match(/[A-Za-z]/))return a;var b=Math.floor(a.charCodeAt(0)/97),c=(a.toLowerCase().charCodeAt(0)-83)%26||26;return String.fromCharCode(c+(0===b?64:96))}).join('')};exports.default=rot13;