'use strict';var _tape=require('tape');var _tape2=_interopRequireDefault(_tape);var _colorize=require('./colorize');var _colorize2=_interopRequireDefault(_colorize);var _util=require('util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(0,_tape2.default)('color.blue() returns string wrapped in appropriate escape codes',function(t){t.plan(1);var col=(0,_util.inspect)(_colorize2.default.blue('foo'));var str='\'\\u001b[34mfoo\\u001b[39m\'';t.is(col,str)});