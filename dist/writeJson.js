'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _fs=require('fs'),writeJson=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:2,d=arguments[3];'function'!=typeof d&&(d=c,c=0);var e;try{e=JSON.stringify(b,null,c)}catch(a){return void d(a)}(0,_fs.writeFile)(a,e,'utf8',d)};exports.default=writeJson;