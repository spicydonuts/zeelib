'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _pipe=require('./pipe'),_pipe2=_interopRequireDefault(_pipe),_reverse=require('./reverse'),_reverse2=_interopRequireDefault(_reverse);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var compose=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return _pipe2.default.apply(void 0,_toConsumableArray((0,_reverse2.default)(b)))};exports.default=compose;