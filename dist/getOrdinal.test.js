'use strict';var _tape=require('tape'),_tape2=_interopRequireDefault(_tape),_getOrdinal=require('./getOrdinal'),_getOrdinal2=_interopRequireDefault(_getOrdinal);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(0,_tape2.default)('getOrdinal',function(a){a.plan(3),a.equal((0,_getOrdinal2.default)(1),'1st','returns 1st for 1'),a.equal((0,_getOrdinal2.default)(39),'39th','returns 39th for 39'),a.equal((0,_getOrdinal2.default)(22),'22nd','returns 22nd for 22')});