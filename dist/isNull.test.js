'use strict';var _tape=require('tape'),_tape2=_interopRequireDefault(_tape),_isNull=require('./isNull'),_isNull2=_interopRequireDefault(_isNull);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(0,_tape2.default)('isNull',function(a){a.plan(2),a.false((0,_isNull2.default)(0),'returns false for 0'),a.true((0,_isNull2.default)(null),'returns true for null')});