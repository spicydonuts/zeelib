'use strict';var _tape=require('tape'),_tape2=_interopRequireDefault(_tape),_init=require('./init'),_init2=_interopRequireDefault(_init);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(0,_tape2.default)('init',function(a){a.plan(2),a.deepEqual((0,_init2.default)([1,2,3]),[1,2],'returns all but last el of arr'),a.deepEqual((0,_init2.default)([]),[],'returns empty arr if passed empty arr')});