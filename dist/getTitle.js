'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _getIsBrowser=require('./getIsBrowser'),_getIsBrowser2=_interopRequireDefault(_getIsBrowser);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var getTitle=function(){return(0,_getIsBrowser2.default)()?window.title||document.title:process.title};exports.default=getTitle;