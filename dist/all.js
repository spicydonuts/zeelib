'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _curry=require('./curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var all=(0,_curry2.default)(function(a,b){return!!b.reduce&&'function'==typeof a&&b.reduce(function(b,c){return!!b&&!!a(c)},!0)});exports.default=all;