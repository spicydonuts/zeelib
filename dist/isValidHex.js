'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isHexBased=require('./isHexBased'),_isHexBased2=_interopRequireDefault(_isHexBased),_trimSpaces=require('./trimSpaces'),_trimSpaces2=_interopRequireDefault(_trimSpaces);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isValidHex=function(a){return(0,_isHexBased2.default)((0,_trimSpaces2.default)(a))};exports.default=isValidHex;