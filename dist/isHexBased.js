'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _hexRegex=require('./hexRegex'),_hexRegex2=_interopRequireDefault(_hexRegex);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isHexBased=function(a){return _hexRegex2.default.test(a)};exports.default=isHexBased;