'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _fs=require('fs'),getNodeModules=function(){var c={};return(0,_fs.readdirSync)('node_modules').filter(function(d){return-1===['.bin'].indexOf(d)}).forEach(function(d){c[d]='commonjs '+d}),c};exports.default=getNodeModules;