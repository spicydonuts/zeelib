'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _greatestCommonDivisor=require('./greatestCommonDivisor'),_greatestCommonDivisor2=_interopRequireDefault(_greatestCommonDivisor);function _interopRequireDefault(c){return c&&c.__esModule?c:{default:c}}function leastCommonMultiple(){for(var e,c=arguments.length,d=arguments[--c];d&&c;)e=arguments[--c],d=d*e/(0,_greatestCommonDivisor2.default)(d,e);return d}exports.default=leastCommonMultiple;