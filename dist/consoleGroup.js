'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var GROUP_SHIFT='   ',GROUP_ARROW='\u25BC',groupPrefix='',consoleGroup=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(console.group){var d;(d=console).log.apply(d,_toConsumableArray(b))}else{var e;console.log(''),(e=console).log.apply(e,[groupPrefix+GROUP_ARROW].concat(_toConsumableArray(b))),groupPrefix+=GROUP_SHIFT}};exports.default=consoleGroup;