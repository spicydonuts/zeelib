'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _map=require('./map'),_map2=_interopRequireDefault(_map),_pair=require('./pair'),_pair2=_interopRequireDefault(_pair);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var zipWith=function(a,b,c){return(0,_map2.default)(function(b,d){return a.apply(a,(0,_pair2.default)(b,c[d]))},b)};exports.default=zipWith;