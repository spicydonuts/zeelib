'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isNan=require('./isNan'),_isNan2=_interopRequireDefault(_isNan);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isNumber=function(a){return'number'==typeof a&&!(0,_isNan2.default)(a)};exports.default=isNumber;