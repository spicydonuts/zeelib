'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _objectAssign=require('./objectAssign'),_objectAssign2=_interopRequireDefault(_objectAssign);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var store=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=[];return{subscribe:function subscribe(c){b.push(c)},unsubscribe:function unsubscribe(c){b.includes(c)&&b.splice(b.indexOf(c),1)},setState:function setState(c){var d=a;a=(0,_objectAssign2.default)({},d,'function'==typeof c?c(d):c);for(var e=0;e<b.length;e++)b[e](a,d)},getState:function getState(){return a}}};exports.default=store;